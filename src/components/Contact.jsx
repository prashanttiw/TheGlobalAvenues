import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today and let's discuss how we can help you achieve your international education goals.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 11 4680 1133</p>
                  <p className="text-muted-foreground">+91 93198 31133</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">connect@theglobalavenues.com</p>
                  <p className="text-muted-foreground">admissions@theglobalavenues.com</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    A 6, Block A, South Extension II<br />
                    New Delhi - 110049, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="font-semibold text-foreground">Connect With Us</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 transform hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 bg-background border border-border rounded-2xl transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[30px]'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium animate-fade-in-up">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
