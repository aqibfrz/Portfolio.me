
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <AnimatedText text="About Me" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div className={cn(
            "md:col-span-2 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
              <p className="text-muted-foreground mb-6 text-balance">
              I'm passionate Machine Learning and Full-Stack Developer with a strong focus on Python. I love building intelligent, interactive applications that blend AI, facial recognition, and web technologies to create innovative solutions.
              I've worked on a variety of projects from e-commerce platforms to complex web applications.
            </p>
            <p className="text-muted-foreground mb-6 text-balance">
              My approach combines technical expertise with creative problem-solving. I believe that great digital products should not only function flawlessly but also connect with users on an aesthetic and emotional level.
            </p>
            <p className="text-muted-foreground text-balance">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains. I'm always open to new opportunities and collaborations.
            </p>
              {/* Resume Button */}
              <a href=".\public\Aqib Resume.pdf" download>
              <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition">
                Download Resume
              </button>
            </a>
          </div>

          <div className={cn(
            "transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Education</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Computer Science and Engineering, B-Tech</p>
                    <p className="text-sm text-muted-foreground">Allen House of Technology</p>
                    <p className="text-xs text-muted-foreground">2021 - 2025</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Internship</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Machine Learning Intern</p>
                    <p className="text-sm text-muted-foreground">Trimbak Infotech</p>
                    <p className="text-xs text-muted-foreground">2023</p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Artificial Intelligence+Machine Leraning -Remote</p>
                    <p className="text-sm text-muted-foreground">Prutor IITK</p>
                    <p className="text-xs text-muted-foreground">2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
