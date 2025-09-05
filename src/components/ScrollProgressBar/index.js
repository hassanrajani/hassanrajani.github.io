import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progressBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 99999,
    borderBottom: '1px solid rgba(133, 76, 230, 0.3)'
  };

  const progressStyle = {
    height: '100%',
    background: 'linear-gradient(90deg, #854CE6 0%, #be1adb 100%)',
    width: `${scrollProgress}%`,
    transition: 'width 0.2s ease-out',
    boxShadow: '0 0 15px rgba(133, 76, 230, 0.8)',
    borderRadius: '0 3px 3px 0'
  };

  return (
    <div style={progressBarStyle}>
      <div style={progressStyle}></div>
    </div>
  );
};

export default ScrollProgressBar;