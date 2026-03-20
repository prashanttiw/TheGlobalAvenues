import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getHomeContent } from '../services/contentApi';

const DEFAULT_HOME_CONTENT = {
  hero: [],
  whyChoose: [],
  solutions: [],
};

const HomeContentContext = createContext({
  homeContent: DEFAULT_HOME_CONTENT,
  isLoading: false,
});

const pickFirst = (source, keys) => {
  if (!source) return '';
  for (const key of keys) {
    const value = source[key];
    if (value !== undefined && value !== null && String(value).trim() !== '') {
      return String(value).trim();
    }
  }
  return '';
};

const normalizeRows = (value) => (Array.isArray(value) ? value : []);

const mapHeroItem = (item, index) => ({
  id: pickFirst(item, ['id', 'slug']) || `hero-${index + 1}`,
  badge: pickFirst(item, ['badge', 'kicker', 'tag', 'label', 'pill']),
  titleLine1: pickFirst(item, ['title_line_1', 'heading_line_1', 'title', 'headline', 'heading']),
  titleLine2: pickFirst(item, ['title_line_2', 'heading_line_2', 'subheading', 'subtitle']),
  description: pickFirst(item, ['description', 'content', 'summary', 'text', 'copy']),
  primaryCtaLabel: pickFirst(item, [
    'primary_cta_label',
    'cta_primary_label',
    'cta_label',
    'button_label',
  ]),
  primaryCtaUrl: pickFirst(item, ['primary_cta_url', 'cta_primary_url', 'button_url', 'cta_url']),
  secondaryCtaLabel: pickFirst(item, ['secondary_cta_label', 'cta_secondary_label']),
  secondaryCtaUrl: pickFirst(item, ['secondary_cta_url', 'cta_secondary_url']),
});

const mapSimpleCard = (item, index, prefix) => ({
  id: pickFirst(item, ['id', 'slug']) || `${prefix}-${index + 1}`,
  title: pickFirst(item, ['title', 'heading', 'name', 'label']),
  description: pickFirst(item, ['description', 'content', 'summary', 'text', 'details']),
});

const buildHomeContent = (payload) => {
  const source = payload && typeof payload === 'object' ? payload : {};
  return {
    hero: normalizeRows(source.hero).map(mapHeroItem),
    whyChoose: normalizeRows(source.why_choose).map((item, index) =>
      mapSimpleCard(item, index, 'why-choose')
    ),
    solutions: normalizeRows(source.solutions).map((item, index) =>
      mapSimpleCard(item, index, 'solution')
    ),
  };
};

export function HomeContentProvider({ children }) {
  const [homeContent, setHomeContent] = useState(DEFAULT_HOME_CONTENT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadHomeContent = async () => {
      setIsLoading(true);
      try {
        const data = await getHomeContent({ signal: controller.signal });
        setHomeContent(buildHomeContent(data));
      } catch (error) {
        if (error.name !== 'AbortError') {
          setHomeContent(DEFAULT_HOME_CONTENT);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadHomeContent();

    return () => controller.abort();
  }, []);

  const value = useMemo(
    () => ({
      homeContent,
      isLoading,
    }),
    [homeContent, isLoading]
  );

  return <HomeContentContext.Provider value={value}>{children}</HomeContentContext.Provider>;
}

export const useHomeContent = () => useContext(HomeContentContext);
