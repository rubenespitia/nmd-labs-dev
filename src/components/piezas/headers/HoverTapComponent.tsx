// src/components/HoverTapComponent.tsx
import React from 'react';
import { motion } from 'framer-motion';

const HoverTapComponent = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.8 }}
  >
       {children}
  </motion.div>
);

export default HoverTapComponent;