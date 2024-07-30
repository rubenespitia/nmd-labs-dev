// src/components/BounceComponent.tsx
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const BounceComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ y: 0 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50 }}
      animate={controls}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 10,
        delay: 0.75, // Agrega un retraso de 0.3 segundos
      }}
    >
      {children}
    </motion.div>
  );
};

export default BounceComponent;
