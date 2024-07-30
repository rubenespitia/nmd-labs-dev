// ColorChangeComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const ColorChangeComponent = () => {
  return (
    <motion.div
      initial={{ backgroundColor: '#ff0000' }}
      animate={{ backgroundColor: '#0000ff' }}
      transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      style={{ width: '100px', height: '100px' }}
    >
      This component changes color!
    </motion.div>
  );
};

export default ColorChangeComponent;
