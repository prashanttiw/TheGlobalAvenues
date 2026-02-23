import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Globe, Users, TrendingUp } from 'lucide-react';

export function Hero() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="home" className="min-h-screen pt-20 px-4 flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 -z-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div
          ref={ref}
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-30px]'
          }`}
        >
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold">
              ✨ Your Global Education Partner
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Unlock Your
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                International Potential
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Enabling international universities to effortlessly access the South Asian market through specialized in-country representation and expert guidance.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 py-8">
            <div className="p-4 bg-muted/50 rounded-lg backdrop-blur hover:bg-muted transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">3000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Students Placed</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg backdrop-blur hover:bg-muted transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-secondary" />
                <span className="text-2xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Universities</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg backdrop-blur hover:bg-muted transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold text-foreground">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div
          className={`relative h-96 lg:h-full min-h-96 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'
          }`}
        >
          {/* Moving Light Effect */}
          <div className="corner-light"></div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10 rounded-3xl"></div>
          <div className="absolute inset-4 bg-background rounded-3xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-full">
                <Globe className="w-16 h-16 text-white" />
              </div>
              <p className="text-2xl font-bold text-foreground">Global Excellence</p>
              <p className="text-muted-foreground max-w-xs">Connecting talented students with world-class universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
