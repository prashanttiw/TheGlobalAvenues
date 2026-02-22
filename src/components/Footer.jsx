import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground overflow-hidden">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out forwards', opacity: 0 }}>
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded flex items-center justify-center font-bold text-foreground transition-transform duration-300 group-hover:scale-110 icon-bounce">
                GA
              </div>
              <span className="text-xl font-bold group-hover:text-secondary transition-colors duration-300">Global Avenues</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Connecting world-class talent with leading organizations across continents.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-125 icon-bounce" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-125 icon-bounce" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-125 icon-bounce" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-secondary/80 transition-all duration-300 transform hover:scale-125 icon-bounce" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.1s forwards', opacity: 0 }}>
            <h4 className="font-bold text-lg">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards', opacity: 0 }}>
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Talent Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Permanent Placement
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:pl-2 transition-all duration-300 text-sm block">
                  Skills Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0 }}>
            <h4 className="font-bold text-lg">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex gap-3 group cursor-pointer">
                <MapPin className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" size={18} />
                <div className="text-sm text-primary-foreground/70 group-hover:text-secondary transition-colors duration-300">
                  New Delhi<br />
                  India
                </div>
              </div>
              <div className="flex gap-3 items-start group hover:text-secondary transition-colors duration-300">
                <Phone className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" size={18} />
                <a href="tel:+911146801133" className="text-primary-foreground/70 group-hover:text-secondary transition-colors duration-300 text-sm">
                  +91 11 4680 1133
                </a>
              </div>
              <div className="flex gap-3 items-start group hover:text-secondary transition-colors duration-300">
                <Mail className="text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" size={18} />
                <a href="mailto:connect@theglobalavenues.com" className="text-primary-foreground/70 group-hover:text-secondary transition-colors duration-300 text-sm">
                  connect@theglobalavenues.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 my-12"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 scroll-fade-in" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards', opacity: 0 }}>
          <p className="text-primary-foreground/70 text-sm">
            Copyright © {currentYear} The Global Avenues. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:underline transition-all duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:underline transition-all duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-secondary hover:underline transition-all duration-300 text-sm">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
