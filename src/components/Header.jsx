import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 bg-background border-b border-border z-50 shadow-sm backdrop-blur-sm bg-background/80">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 icon-bounce">
              <span className="text-primary-foreground font-bold text-xl">GA</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">The Global Avenues</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-foreground font-medium text-sm transition-colors duration-300 group hover:text-primary"
                style={{ animation: `fadeInDown 0.6s ease-out ${0.1 + idx * 0.05}s forwards`, opacity: 0 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block btn-primary text-sm" style={{ animation: 'fadeInDown 0.6s ease-out 0.35s forwards', opacity: 0 }}>
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? (
              <X size={24} className="animate-spin" style={{ animationDuration: '0.3s' }} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-slideDown">
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary hover:pl-2 transition-all duration-300 font-medium px-2 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                  style={{ animation: `slideInLeft 0.3s ease-out ${idx * 0.05}s forwards`, opacity: 0 }}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary w-full mt-2" style={{ animation: 'slideInLeft 0.3s ease-out 0.25s forwards', opacity: 0 }}>
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
