import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import ScrollProgress from "./components/ScrollProgress";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MouseEffects from './mouseEffects';

const Body = styled(motion.div)`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  position: relative;
`

const Wrapper = styled(motion.div)`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  position: relative;
`

const LoadingScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1C1C27, #854CE6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  font-size: 2rem;
  color: white;
  font-weight: bold;
`
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true);
  const [mouseEffects, setMouseEffects] = useState(null);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Initialize mouse effects after loading
  useEffect(() => {
    if (!loading) {
      const effects = new MouseEffects();
      setMouseEffects(effects);
      
      return () => {
        if (effects) {
          effects.destroy();
        }
      };
    }
  }, [loading]);
  
  // Refresh mouse effects when modal state changes
  useEffect(() => {
    if (mouseEffects) {
      const timer = setTimeout(() => {
        mouseEffects.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [openModal.state, mouseEffects]);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AnimatePresence>
        {loading && (
          <LoadingScreen
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ marginLeft: '20px' }}
            >
              Loading Portfolio...
            </motion.span>
          </LoadingScreen>
        )}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <ScrollProgressBar />
          <ScrollProgress />
          <ScrollToTop />
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <Body
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <HeroSection />
            </motion.div>
            
            <Wrapper
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Skills />
              <Experience />
            </Wrapper>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
            </motion.div>
            
            <Wrapper
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Education />
              <Contact />
            </Wrapper>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Footer />
            </motion.div>
            
            <AnimatePresence>
              {openModal.state && (
                <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
              )}
            </AnimatePresence>
          </Body>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
