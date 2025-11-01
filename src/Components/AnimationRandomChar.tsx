import { motion } from "framer-motion";

type animationProps = {
  text: string;
  className?: string;
};

const AnimateRandomChar = ({ text, className }: animationProps) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: Math.random() * 0.8,
        ease: "easeOut",
      }}
      className={className}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

export default AnimateRandomChar;
