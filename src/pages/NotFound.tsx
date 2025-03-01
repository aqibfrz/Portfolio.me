
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div 
        className={cn(
          "text-center max-w-md transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <a 
          href="/" 
          className="px-6 py-3 bg-foreground text-background rounded-md font-medium transition-all hover:opacity-90"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
