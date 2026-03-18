import { useState } from 'react';
import { Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { InteractiveGlobe } from './contact/InteractiveGlobe';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/30 px-4 pb-0 pt-20">
      <div className="absolute top-0 right-0 z-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          ref={ref}
          className={`mb-2 text-center transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'translate-y-[30px] opacity-0'
          }`}
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Ready to Start Your Journey?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Contact us today and let&apos;s discuss how we can help you achieve your international education goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_24.5rem] lg:items-center lg:gap-0">
          <div className="order-2 overflow-hidden rounded-[28px] lg:order-1 lg:pt-20">
            <div className="h-[400px] sm:h-[500px] lg:h-[650px]">
              <InteractiveGlobe />
            </div>
          </div>

          <div
            className={`order-1 w-full max-w-[24.5rem] rounded-2xl border border-slate-200 bg-background/62 p-4 shadow-[0_24px_60px_rgba(13,10,26,0.22)] backdrop-blur-md transition-all duration-1000 dark:border-white/12 sm:p-5 lg:order-2 lg:mt-24 lg:-ml-[5.25rem] lg:justify-self-start lg:p-5 ${
              isVisible ? 'animate-fade-in-right' : 'translate-x-[30px] opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-500 focus:border-brand-purple/40 focus:outline-none focus:ring-1 focus:ring-brand-purple/40 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/60"
                  placeholder="Aarav Mehta"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-500 focus:border-brand-purple/40 focus:outline-none focus:ring-1 focus:ring-brand-purple/40 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/60"
                  placeholder="aarav.mehta@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 transition-all placeholder:text-slate-500 focus:border-brand-purple/40 focus:outline-none focus:ring-1 focus:ring-brand-purple/40 dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-white/60"
                  placeholder="I want guidance for studying abroad in Europe."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-secondary"
              >
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {submitted && (
                <div className="animate-fade-in-up rounded-lg bg-green-100 p-4 text-center font-medium text-green-800">
                  Message sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
