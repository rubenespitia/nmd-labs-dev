// HoverComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HoverComponent = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, opacity: 0.8 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100px', height: '100px', backgroundColor: '#00f' }}
    >
      Hover over me!
    </motion.div>
  );
};

export default HoverComponent;
