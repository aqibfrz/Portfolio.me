
import { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="overflow-hidden">
                <p 
                  className={cn(
                    "text-muted-foreground inline-block transition-transform duration-1000 delay-300",
                    loaded ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  Hello, I'm
                </p>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <AnimatedText 
                  text="John Doe" 
                  className="inline-block"
                  delay={500}
                />
                <span className="block h-2"></span>
                <AnimatedText 
                  text="Creative Developer" 
                  className="inline-block text-muted-foreground"
                  delay={800}
                />
              </h1>
              
              <div className="overflow-hidden pt-2">
                <p 
                  className={cn(
                    "max-w-md text-muted-foreground text-balance transition-transform duration-1000 delay-1000",
                    loaded ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  I create engaging digital experiences through clean code and thoughtful design. Specialized in building modern web applications with attention to detail.
                </p>
              </div>
              
              <div className="overflow-hidden">
                <div 
                  className={cn(
                    "flex items-center gap-5 transition-transform duration-1000 delay-1200",
                    loaded ? "translate-y-0" : "translate-y-full"
                  )}
                >
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-foreground text-background rounded-md font-medium transition-all hover:opacity-90"
                  >
                    Get in touch
                  </a>
                  <a 
                    href="#projects" 
                    className="px-6 py-3 border border-border rounded-md font-medium transition-all hover:bg-secondary"
                  >
                    View work
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className={cn(
                "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden transition-all duration-1000",
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted-foreground/10 rounded-full p-1">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl">JD</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-foreground/5 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <div 
            className={cn(
              "flex flex-col items-center transition-opacity duration-1000 delay-1500",
              loaded ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="text-muted-foreground text-sm mb-2">Scroll down</span>
            <div className="w-0.5 h-10 bg-border relative overflow-hidden">
              <div className="w-full h-1/2 bg-muted-foreground absolute top-0 left-0 animate-[slide-in-bottom_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
