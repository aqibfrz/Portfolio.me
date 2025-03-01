
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
              I'm a passionate frontend developer with a keen eye for design and a dedication to creating seamless user experiences. With 5+ years of experience in web development, I've worked on a variety of projects from e-commerce platforms to complex web applications.
            </p>
            <p className="text-muted-foreground mb-6 text-balance">
              My approach combines technical expertise with creative problem-solving. I believe that great digital products should not only function flawlessly but also connect with users on an aesthetic and emotional level.
            </p>
            <p className="text-muted-foreground text-balance">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains. I'm always open to new opportunities and collaborations.
            </p>
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
                    <p className="font-medium">Computer Science, BS</p>
                    <p className="text-sm text-muted-foreground">University of Technology</p>
                    <p className="text-xs text-muted-foreground">2014 - 2018</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Experience</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Senior Frontend Developer</p>
                    <p className="text-sm text-muted-foreground">TechCorp Inc.</p>
                    <p className="text-xs text-muted-foreground">2021 - Present</p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Frontend Developer</p>
                    <p className="text-sm text-muted-foreground">Digital Agency</p>
                    <p className="text-xs text-muted-foreground">2018 - 2021</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Internships</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Web Development Intern</p>
                    <p className="text-sm text-muted-foreground">Startup Innovations</p>
                    <p className="text-xs text-muted-foreground">Summer 2017</p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">UX Design Intern</p>
                    <p className="text-sm text-muted-foreground">Creative Solutions</p>
                    <p className="text-xs text-muted-foreground">Summer 2016</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Certifications</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">AWS Certified Developer</p>
                    <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                    <p className="text-xs text-muted-foreground">2022</p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">Professional Frontend Developer</p>
                    <p className="text-sm text-muted-foreground">Frontend Masters</p>
                    <p className="text-xs text-muted-foreground">2020</p>
                  </div>
                  <div className="border-l-2 border-border pl-4 py-1">
                    <p className="font-medium">UI/UX Design Specialist</p>
                    <p className="text-sm text-muted-foreground">Design Academy</p>
                    <p className="text-xs text-muted-foreground">2019</p>
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
