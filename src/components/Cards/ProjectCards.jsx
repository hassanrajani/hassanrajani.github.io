import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.primary};
    color: white;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
        background-color: ${({ theme }) => theme.button};
        transform: translateY(-1px);
    }
`
const Card = styled.div`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease;
    border: 1px solid rgba(133, 76, 230, 0.2);
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(133, 76, 230, 0.3);
        border-color: ${({ theme }) => theme.primary};
    }
    
    &:hover ${Button} {
        display: block;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 350px;
        height: auto;
        min-height: 420px;
        padding: 20px 16px;
    }
    
    @media (max-width: 480px) {
        max-width: 300px;
        min-height: 380px;
        padding: 16px 12px;
        gap: 10px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    object-fit: cover;
    transition: transform 0.3s ease;
    
    @media (max-width: 480px) {
        height: 150px;
    }
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 4px 8px;
    border-radius: 10px;
    
    @media (max-width: 480px) {
        font-size: 10px;
        padding: 3px 6px;
    }
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    transition: color 0.3s ease;
    
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    
    @media (max-width: 480px) {
        font-size: 18px;
    }
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 14px;
    
    @media (max-width: 480px) {
        font-size: 13px;
        -webkit-line-clamp: 2;
    }
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img}/>
                ))}
            </Members>
            <Button>View Project</Button>
        </Card>
    )
}

export default ProjectCards