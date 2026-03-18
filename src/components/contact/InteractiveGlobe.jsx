import { useEffect, useRef } from 'react';

const THREE_CDN = 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js';
const GLOBE_CDN = 'https://unpkg.com/globe.gl@2.32.2/dist/globe.gl.min.js';
const GEOJSON_URL =
  'https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson';

const LOCATIONS = [
  { lat: 20.5937, lng: 78.9629, radius: 5.5, colorRgb: '255, 255, 255' },
  { lat: 35.1856, lng: 33.3823, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 46.2276, lng: 2.2137, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 51.1657, lng: 10.4515, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 51.5074, lng: -0.1278, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 39.0902, lng: -95.7129, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 56.1304, lng: -106.3468, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 36.2048, lng: 138.2529, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 61.524, lng: 105.3188, radius: 2.0, colorRgb: '255, 0, 85' },
  { lat: 15.87, lng: 100.9925, radius: 2.0, colorRgb: '255, 0, 85' },
];

function loadExternalScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-external-script="${src}"]`);

    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }

      existing.addEventListener('load', resolve, { once: true });
      existing.addEventListener('error', reject, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.dataset.externalScript = src;

    script.addEventListener(
      'load',
      () => {
        script.dataset.loaded = 'true';
        resolve();
      },
      { once: true }
    );
    script.addEventListener('error', reject, { once: true });

    document.head.appendChild(script);
  });
}

export function InteractiveGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) {
      return undefined;
    }

    let cancelled = false;
    let frameId = 0;
    let globe = null;
    let scene = null;
    let controls = null;
    let raycaster = null;
    let mouse = null;
    let hoveringMesh = false;
    let pointerDown = false;
    const container = containerRef.current;
    const geoAbortController = new AbortController();

    const handleResize = () => {
      if (!globe || !container) return;
      globe.width(container.clientWidth);
      globe.height(container.clientHeight);
    };

    const handleMouseMove = (event) => {
      if (!mouse) return;
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseLeave = () => {
      if (!mouse) return;
      mouse.x = -2;
      mouse.y = -2;
      hoveringMesh = false;
      pointerDown = false;
      container.style.cursor = 'default';
    };

    const handlePointerDown = () => {
      pointerDown = true;
      if (hoveringMesh) {
        container.style.cursor = 'grabbing';
      }
    };

    const handlePointerUp = () => {
      pointerDown = false;
      container.style.cursor = hoveringMesh ? 'grab' : 'default';
    };

    const animate = () => {
      if (cancelled || !controls || !raycaster || !scene || !globe) return;

      controls.update();

      raycaster.setFromCamera(mouse, globe.camera());
      const intersections = raycaster.intersectObjects(scene.children, true);

      let hoveringGlobe = false;
      for (let index = 0; index < intersections.length; index += 1) {
        if (intersections[index].object.type === 'Mesh') {
          hoveringGlobe = true;
          break;
        }
      }

      hoveringMesh = hoveringGlobe;
      controls.autoRotate = !hoveringGlobe;
      controls.enableRotate = hoveringGlobe;
      container.style.cursor = hoveringGlobe ? (pointerDown ? 'grabbing' : 'grab') : 'default';
      frameId = window.requestAnimationFrame(animate);
    };

    const initializeGlobe = async () => {
      try {
        await loadExternalScript(THREE_CDN);
        await loadExternalScript(GLOBE_CDN);

        if (cancelled) return;

        const THREE = window.THREE;
        const GlobeFactory = window.Globe;

        if (!THREE || !GlobeFactory) return;

        globe = GlobeFactory()(container)
          .backgroundColor('rgba(0,0,0,0)')
          .showGlobe(true)
          .showAtmosphere(true)
          .atmosphereColor('#6e1428')
          .atmosphereAltitude(0.18)
          .ringsData(LOCATIONS)
          .ringColor((location) => (time) => `rgba(${location.colorRgb}, ${Math.max(0, 1 - time)})`)
          .ringMaxRadius((location) => location.radius * 1.45)
          .ringPropagationSpeed(1.75)
          .ringRepeatPeriod(780);

        handleResize();

        globe.globeMaterial(new THREE.MeshPhongMaterial({ color: 0x050203, shininess: 0.18 }));

        scene = globe.scene();
        scene.children = scene.children.filter(
          (child) => !(child instanceof THREE.AmbientLight || child instanceof THREE.DirectionalLight)
        );
        scene.add(new THREE.AmbientLight(0x4a1525, 3.6));

        controls = globe.controls();
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.enableRotate = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 3.0;

        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2(-2, -2);

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mousedown', handlePointerDown);
        window.addEventListener('mouseup', handlePointerUp);
        window.addEventListener('resize', handleResize);

        globe.pointOfView({ lat: 30, lng: 40, altitude: 1.55 }, 2000);

        const response = await fetch(GEOJSON_URL, { signal: geoAbortController.signal });
        const countries = await response.json();

        if (!cancelled && globe) {
          globe
            .hexPolygonsData(countries.features)
            .hexPolygonResolution(3)
            .hexPolygonMargin(0.52)
            .hexPolygonColor(() => 'rgba(255, 150, 182, 0.64)')
            .hexPolygonAltitude(0.007);
        }

        if (!cancelled) {
          animate();
        }
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Failed to initialize globe:', error);
        }
      }
    };

    initializeGlobe();

    return () => {
      cancelled = true;
      geoAbortController.abort();
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mouseup', handlePointerUp);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousedown', handlePointerDown);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      <div ref={containerRef} className="h-full w-full cursor-default" />
    </div>
  );
}
