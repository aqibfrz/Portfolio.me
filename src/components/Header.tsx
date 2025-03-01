
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && scrollTop >= element.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-8 lg:px-12',
        scrolled
          ? 'bg-background/80 backdrop-blur-md py-3 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-lg font-medium tracking-tight transition-opacity hover:opacity-80"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'link-underline text-sm transition-all py-1',
                    activeSection === item.href.substring(1)
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-foreground transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )} 
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "top-[57px] opacity-100 pointer-events-auto"
            : "-top-96 opacity-0 pointer-events-none"
        )}
      >
        <nav className="px-6 py-8">
          <ul className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'text-base transition-colors',
                    activeSection === item.href.substring(1)
                      ? 'text-foreground font-medium'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
