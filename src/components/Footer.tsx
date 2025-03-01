
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  return (
    <footer className="py-12 px-6 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div 
            className={cn(
              "mb-6 md:mb-0 transition-all duration-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <p className="text-sm text-muted-foreground">
              © {year} John Doe. All rights reserved.
            </p>
          </div>
          
          <div 
            className={cn(
              "flex space-x-6 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <a 
              href="#" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
