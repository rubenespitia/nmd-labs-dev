// src/components/ScaleUpComponent.tsx
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ScaleUpComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: 1 });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={controls}
      transition={{ duration: 0.75, delay: 0.3 }} // Agrega un retraso de 0.3 segundos
    >
      {children}
    </motion.div>
  );
};

export default ScaleUpComponent;
