// PulseComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const PulseComponent = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
    >
      This component pulses!
    </motion.div>
  );
};

export default PulseComponent;
