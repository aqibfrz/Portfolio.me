
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number; // delay in ms
}

const AnimatedText = ({ text, className, once = true, delay = 0 }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a delay before showing the animation
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [once, delay]);

  return (
    <div 
      ref={textRef} 
      className={cn(
        'overflow-hidden',
        className
      )}
    >
      <div
        className={cn(
          'transform transition-transform duration-700 ease-out',
          isVisible ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default AnimatedText;
