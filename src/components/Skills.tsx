
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

const Skills = () => {
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

  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'REST APIs', level: 80 },
        { name: 'Firebase', level: 70 },
      ],
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Webpack', level: 70 },
        { name: 'Jest', level: 65 },
        { name: 'UI/UX Design', level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <AnimatedText text="Skills & Expertise" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={cn(
                "transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
                {
                  "delay-100": groupIndex === 0,
                  "delay-300": groupIndex === 1,
                  "delay-500": groupIndex === 2,
                }
              )}
            >
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full bg-foreground rounded-full transition-all duration-1000 ease-out",
                          isVisible
                            ? "w-full"
                            : "w-0"
                        )}
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${index * 100 + 500}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
