// SlideFromLeftComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SlideFromLeftComponent = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      This component slides in from the left!
    </motion.div>
  );
};

export default SlideFromLeftComponent;
