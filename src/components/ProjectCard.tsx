
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, image, link, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100); // Staggered animation based on index
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <div
          className={cn(
            "h-full w-full bg-cover bg-center transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium transition-colors hover:text-primary/80"
          >
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
