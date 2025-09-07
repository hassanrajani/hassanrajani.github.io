import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useSpring } from 'framer-motion';

const ProgressContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: rgba(133, 76, 230, 0.1);
  z-index: 1001;
  transform-origin: 0%;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #854CE6 0%, #be1adb 50%, #d946ef 100%);
  border-radius: 0 2px 2px 0;
  box-shadow: 0 0 10px rgba(133, 76, 230, 0.5);
`;

const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #854CE6 0%, #be1adb 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(133, 76, 230, 0.3);
  
  &:hover {
    box-shadow: 0 6px 30px rgba(133, 76, 230, 0.5);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`;

const ScrollProgress = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollProgress(scrollPercent);
      
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <ProgressContainer>
        <ProgressBar style={{ scaleX }} />
      </ProgressContainer>
      
      {isVisible && (
        <ScrollToTop
          onClick={scrollToTop}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </ScrollToTop>
      )}
    </>
  );
};

export default ScrollProgress;