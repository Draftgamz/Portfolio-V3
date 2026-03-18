import { motion } from "framer-motion";

const GlowBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      className="glow-orb absolute -top-[300px] -left-[200px]"
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="glow-orb absolute top-1/2 -right-[300px] opacity-60"
      animate={{
        x: [0, -100, 0],
        y: [0, -50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="glow-orb absolute -bottom-[400px] left-[20%] opacity-40"
      animate={{
        x: [0, 50, 0],
        y: [0, -100, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);

export default GlowBackground;
