import * as React from "react";
/*import { motion, useViewportScroll, useTransform } from "framer-motion";*/
import { useViewportScroll} from "framer-motion";
import '../../../styles/AnimatedScrollComponents.css';

const AnimatedScrollComponents = () => {
  const { scrollYProgress } = useViewportScroll();
  /*const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);*/
  console.log(scrollYProgress);

  return (/*
    <div className="wrapper">
      /*
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>*/
    <div className="div"></div>
  );
};
export default AnimatedScrollComponents;
