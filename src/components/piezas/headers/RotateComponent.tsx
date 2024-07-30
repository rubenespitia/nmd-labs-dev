// src/components/RotateComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const RotateComponent = () => (
  <motion.div
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 2 }}
  >
    I rotate 360 degrees!
  </motion.div>
);

export default RotateComponent;