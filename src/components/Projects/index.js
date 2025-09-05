import React from 'react'
import { useState, useEffect, useMemo } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styled from 'styled-components'
import { staggerContainer, staggerItem } from '../../utils/animations'


const SliderContainer = styled.div`
  width: 100%;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  .swiper {
    padding: 20px 0 40px 0;
  }
  
  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.primary};
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.primary};
    
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
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

  const filteredProjects = useMemo(() => {
    return toggle === 'all' 
      ? projects 
      : projects.filter((item) => item.category === toggle);
  }, [toggle]);

  return (
    <Container id="projects">
      <Wrapper>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title className="gradient-text">Projects</Title>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Desc>
            I have worked on real-world and practice projects. From web apps to android apps. Here are some of my projects.
          </Desc>
        </motion.div>
        
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ToggleButtonGroup>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ToggleButton 
                active={toggle === 'all'} 
                value="all" 
                onClick={() => setToggle('all')}
                className={toggle === 'all' ? 'glow-effect' : ''}
              >
                All
              </ToggleButton>
            </motion.div>
            <Divider />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ToggleButton 
                active={toggle === 'web app'} 
                value="web app" 
                onClick={() => setToggle('web app')}
                className={toggle === 'web app' ? 'glow-effect' : ''}
              >
                WEB APP'S
              </ToggleButton>
            </motion.div>
            <Divider />
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <ToggleButton 
                active={toggle === 'android app'} 
                value="android app" 
                onClick={() => setToggle('android app')}
                className={toggle === 'android app' ? 'glow-effect' : ''}
              >
                ANDROID APP'S
              </ToggleButton>
            </motion.div>
          </ToggleButtonGroup>
        </motion.div>
        
        {!isMobile ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardContainer>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  variants={staggerItem}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="card-hover"
                >
                  <ProjectCard 
                    project={project} 
                    openModal={openModal} 
                    setOpenModal={setOpenModal}
                  />
                </motion.div>
              ))}
            </CardContainer>
          </motion.div>
        ) : (
          <SliderContainer>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={project.id || index}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard 
                      project={project} 
                      openModal={openModal} 
                      setOpenModal={setOpenModal}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderContainer>
        )}
      </Wrapper>
    </Container>
  )
}

export default Projects