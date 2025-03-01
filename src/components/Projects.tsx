
import { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

import { url } from 'inspector';

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
      title: "Ping Pong Game",
      description: "A professional GAME showcasing creative work with smooth animations and responsive design.",
      tags: ["Python", "Pygame", "OOPS"],
      image: "https://play-lh.googleusercontent.com/KBJ7QFFVcddkHqNQN-gpvpzP6JP4V1dDcAyFEr4g4K6X9fkbIoNZNNGLJ7Pl5jRm5TA",
      link: "https://github.com/aqibfrz/Ping-Pong-Game",
    },
    {
      title: "Email Spam Classifier",
      description: "An email spam classifier is a machine learning-based system designed to automatically filter and categorize emails as either: HAM or SPAM",
      tags:  ["ML", "Numpy", "Skitlearn","Seaborn","Matplotlib","Jupiter Notebook"],
      image: 'https://media.istockphoto.com/id/160975917/photo/concept-of-email-filter-in-work.jpg?s=612x612&w=0&k=20&c=3pfIX3lVsbjE1Kqbyh9xDeuXMMI_77odZ3QencFcMo8=',
      link: "https://github.com/aqibfrz/Email-spam-classifier",
    },
    {
      title: "Wine Quality detection",
      description: "Wine quality detection using machine learning involves predicting a wine's quality based on its chemical properties such as acidity, sugar content, pH level, alcohol percentage, and other measurable components. By training a model on a dataset of previously rated wines, machine learning algorithms can identify patterns that correlate with high or low-quality wines.",
      tags: ["ML", "Numpy", "Skitlearn","Seaborn","Matplotlib","Jupiter Notebook"],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDMagh7TuYFUqszQpZGXwO7YVxTnGvgPW0g&s',
      link: "https://github.com/aqibfrz/wine_quality_detection",
    },
    {
      title:"Gemmify {E-commerce}",
      description: "Gemify is an elegant and feature-rich e-commerce platform designed exclusively for jewelry shopping. It offers a seamless and secure shopping experience, allowing users to explore, purchase, and personalize exquisite jewelry pieces with ease.",
      tags: ["HTML", "Tailwind CSS", "Node JS","Express JS","MongoDb"],
      image: "https://canadianjeweller.com/wp-content/uploads/2023/10/gemify.jpg",
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
