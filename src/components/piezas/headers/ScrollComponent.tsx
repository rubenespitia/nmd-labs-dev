import { motion } from "framer-motion"

function ScrollComponent() {
  /*const { scrollYProgress } = useScroll();*/
  
  return (
   
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
    hi
  </motion.div>
  )
}
export default ScrollComponent;
