
import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and secure checkout process.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A professional portfolio website showcasing creative work with smooth animations and responsive design.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="mb-6 md:mb-0 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <AnimatedText text="Featured Projects" />
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-balance transition-opacity duration-700 delay-300" style={{ opacity: isVisible ? 1 : 0 }}>
            A selection of my recent work and personal projects that showcase my skills and passion for web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
