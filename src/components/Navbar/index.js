import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Nav className={scrolled ? 'glass-effect' : ''}>
        <NavbarContainer>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLogo to='/'>
              <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <DiCssdeck size="3rem" />
                </motion.div>
                <Span className="gradient-text">Portfolio</Span>
              </a>
            </NavLogo>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MobileIcon>
              <FaBars onClick={() => setIsOpen(!isOpen)} />
            </MobileIcon>
          </motion.div>
          
          <NavItems>
            {['About', 'Skills', 'Experience', 'Projects', 'Education'].map((item, index) => (
              <motion.div
                key={item}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <NavLink href={`#${item.toLowerCase()}`} className="glow-effect">
                  {item}
                </NavLink>
              </motion.div>
            ))}
          </NavItems>
          
          <ButtonContainer>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GitHubButton 
                href='https://github.com/hassanrajani' 
                target="_blank"
                className="glow-effect"
              >
                Github Profile
              </GitHubButton>
            </motion.div>
          </ButtonContainer>
          
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <GitHubButton 
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`, 
                color: 'white',
                width: 'max-content',
                marginTop: '10px'
              }} 
              href={Bio.github} 
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        </NavbarContainer>
      </Nav>
    </motion.div>
  )
}

export default Navbar
