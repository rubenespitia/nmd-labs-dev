// src/piezas/headers/TituloFadeIn.tsx
import React from 'react';
import { motion } from 'framer-motion';
import '../../../styles/AnimationsComponents.css';

const TituloFadeIn = () => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} // Esto asegura que la animación solo ocurra una vez
      transition={{ duration: 1 }}
      className="fade-in"
    >
      I fade in when scrolled into view!
    </motion.h1>
  );
};

export default TituloFadeIn;
