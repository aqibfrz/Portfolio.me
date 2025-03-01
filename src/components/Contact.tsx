
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <AnimatedText text="Get In Touch" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don't hesitate to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@johndoe.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Social Profiles</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/80"
                  aria-label="GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/80"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-colors hover:bg-secondary/80"
                  aria-label="Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="How can I help you?"
                  required
                  disabled={isSubmitting || submitted}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={cn(
                  "px-6 py-3 rounded-md font-medium transition-all w-full flex items-center justify-center",
                  (isSubmitting || submitted)
                    ? "bg-muted cursor-not-allowed"
                    : "bg-foreground text-background hover:opacity-90"
                )}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : submitted ? (
                  <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : null}
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
