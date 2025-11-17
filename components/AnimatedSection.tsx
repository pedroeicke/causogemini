
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animationClass = 'translate-y-10 opacity-0', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : animationClass}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
