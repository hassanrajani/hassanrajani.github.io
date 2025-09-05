// Common animation configurations for better performance and consistency
export const fadeInUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true }
};

export const fadeInLeft = {
  initial: { x: -50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true }
};

export const fadeInRight = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};