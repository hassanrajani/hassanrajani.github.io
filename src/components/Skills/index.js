import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
padding: 0 20px;
@media (max-width: 960px) {
    flex-direction: column;
    padding: 0 16px;
}
@media (max-width: 480px) {
    padding: 0 12px;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
  @media (max-width: 480px) {
      font-size: 28px;
      margin-top: 8px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 20px;
  }
  
  @media (max-width: 480px) {
    gap: 16px;
    margin-top: 16px;
  }
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(133, 76, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(133, 76, 230, 0.25);
    border-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px 24px;
  }
  @media (max-width: 480px) {
    padding: 14px 20px;
  }
`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
    gap: 6px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 10px;
    gap: 4px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`


const Skills = () => {
 

  
  return (
    <Container id="skills">
      <Wrapper>
        <motion.div {...fadeInUp}>
          <Title className="gradient-text">Skills</Title>
        </motion.div>
        
        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
          <Desc>
            Here are some of my skills on which I have been working on for the past 3 years.
          </Desc>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsContainer>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((item, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: skillIndex * 0.05,
                          ease: "backOut"
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        <SkillItem>
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                            <SkillImage src={item.image} alt={`${item.name} logo`}/>
                          </motion.div>
                          {item.name}
                        </SkillItem>
                      </motion.div>
                    ))}
                  </SkillList>
                </Skill>
              </motion.div>
            ))}
          </SkillsContainer>
        </motion.div>
      </Wrapper>
    </Container>
  )
}

export default Skills