// SpringComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SpringComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-100vw' }}
      animate={isVisible ? { x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
    >
      This component uses a spring animation!
    </motion.div>
  );
};

export default SpringComponent;
