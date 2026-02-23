import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData, categories, partnerCompanies } from '../data/portfolioData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const mainMenuItems = [
    { label: 'Home', path: '/' },
    { label: 'Who We Are', path: '/about' },
    { label: 'Gallery', path: '/services' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TGA</span>
              </div>
              <span className="font-bold text-lg text-foreground hidden sm:inline">
                Global Avenues
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-1" ref={dropdownRef}>
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setOpenDropdown('portfolio')}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 rounded-md group-hover:bg-primary/10"
              >
                Portfolio
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              {(openDropdown === 'portfolio') && (
                <div 
                  className="absolute left-0 mt-0 w-72 bg-background border border-border rounded-lg shadow-2xl animate-fade-in-down origin-top"
                  onMouseEnter={() => setOpenDropdown('portfolio')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-primary text-white px-4 py-3 font-semibold rounded-t-lg">
                    Our University Partners
                  </div>
                  <div className="space-y-1 p-2 max-h-96 overflow-y-auto">
                    {portfolioData.map((portfolio) => (
                      <Link
                        key={portfolio.id}
                        to={`/portfolio/${portfolio.id}`}
                        className="block px-4 py-3 text-sm text-foreground hover:bg-primary/10 rounded-md transition-colors border-l-2 border-transparent hover:border-primary hover:pl-3"
                      >
                        <div className="font-medium">{portfolio.title}</div>
                        <div className="text-muted-foreground text-xs">{portfolio.country}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Partners Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setOpenDropdown('partners')}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 rounded-md group-hover:bg-primary/10"
              >
                Partners
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              {(openDropdown === 'partners') && (
                <div 
                  className="absolute left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-2xl animate-fade-in-down origin-top"
                  onMouseEnter={() => setOpenDropdown('partners')}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="bg-secondary text-white px-4 py-3 font-semibold rounded-t-lg">
                    Our Partners
                  </div>
                  <div className="space-y-1 p-2">
                    {partnerCompanies.map((partner) => (
                      <div
                        key={partner.id}
                        className="px-4 py-3 text-sm text-foreground hover:bg-secondary/10 rounded-md transition-colors border-l-2 border-transparent hover:border-secondary cursor-pointer group"
                      >
                        <div className="font-medium group-hover:text-secondary">{partner.name}</div>
                        <div className="text-muted-foreground text-xs">{partner.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <Link
              to="/collaborate"
              className="hidden sm:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-all duration-300 transform hover:scale-105 font-medium text-sm"
            >
              Connect Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-fade-in-down">
            {mainMenuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block px-4 py-2 rounded-lg transition-colors text-sm ${
                  isActive(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Portfolio Dropdown */}
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'portfolio' ? null : 'portfolio')}
              className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-between text-sm"
            >
              Portfolio
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'portfolio' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'portfolio' && (
              <div className="pl-4 space-y-1">
                {portfolioData.map((portfolio) => (
                  <Link
                    key={portfolio.id}
                    to={`/portfolio/${portfolio.id}`}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-md transition-colors"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setOpenMobileDropdown(null);
                    }}
                  >
                    {portfolio.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Partners Dropdown */}
            <button
              onClick={() => setOpenMobileDropdown(openMobileDropdown === 'partners' ? null : 'partners')}
              className="w-full text-left px-4 py-2 rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-between text-sm"
            >
              Partners
              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === 'partners' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'partners' && (
              <div className="pl-4 space-y-1">
                {partnerCompanies.map((partner) => (
                  <div
                    key={partner.id}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/10 rounded-md transition-colors"
                  >
                    {partner.name}
                  </div>
                ))}
              </div>
            )}

            <Link
              to="/collaborate"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center font-medium text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
