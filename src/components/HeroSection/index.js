import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <HeroInnerContainer>
                        <HeroLeftContainer id="Left">
                            <motion.div {...fadeInLeft}>
                                <Title className="gradient-text">
                                    Hi, I am <br /> {Bio.name}
                                </Title>
                            </motion.div>
                            
                            <motion.div {...fadeInLeft} transition={{ ...fadeInLeft.transition, delay: 0.2 }}>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <Typewriter
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                                delay: 75,
                                                deleteSpeed: 50,
                                            }}
                                        />
                                    </Span>
                                </TextLoop>
                            </motion.div>
                            
                            <motion.div {...fadeInLeft} transition={{ ...fadeInLeft.transition, delay: 0.4 }}>
                                <SubTitle>{Bio.description}</SubTitle>
                            </motion.div>
                            
                            <motion.div 
                                {...fadeInLeft}
                                transition={{ ...fadeInLeft.transition, delay: 0.6 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ResumeButton 
                                    href={Bio.resume} 
                                    target='display'
                                    className="glow-effect"
                                >
                                    Check Resume
                                </ResumeButton>
                            </motion.div>
                        </HeroLeftContainer>

                        <HeroRightContainer id="Right">
                            <motion.div
                                {...fadeInRight}
                                transition={{ ...fadeInRight.transition, delay: 0.3 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    rotate: 2,
                                    transition: { duration: 0.3 }
                                }}
                                className="float-animation"
                            >
                                <Img 
                                    src={HeroImg} 
                                    alt="M.Hassan Rajani - Full Stack Developer Profile Picture" 
                                    className="glow-effect"
                                />
                            </motion.div>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default HeroSection