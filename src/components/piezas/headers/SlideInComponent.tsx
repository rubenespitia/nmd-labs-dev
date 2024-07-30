// src/components/SlideInComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SlideInComponent = () => (
  <motion.div
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    I slide in from the left!
  </motion.div>
);

export default SlideInComponent;
