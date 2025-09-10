import styled from "styled-components";
import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  min-height: 100vh;
  align-items: center;
  
  @media (max-width: 960px) {
    padding: 66px 16px;
    min-height: 90vh;
  }
  @media (max-width: 640px) {
    padding: 20px 12px;
    min-height: auto;
  }
  @media (max-width: 480px) {
    padding: 16px 8px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(133, 76, 230, 0.05), rgba(190, 26, 219, 0.05));
    z-index: -1;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 0 30px rgba(133, 76, 230, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  object-fit: cover;
  
  &:hover {
    box-shadow: 0 0 40px rgba(133, 76, 230, 0.6);
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 350px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
  }
  @media (max-width: 480px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  margin: 0 0 20px 0;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 16px;
    flex-direction: column;
    gap: 4px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-shadow: 0 0 10px rgba(133, 76, 230, 0.5);
  transition: all 0.3s ease;
  
  &:hover {
    text-shadow: 0 0 20px rgba(133, 76, 230, 0.8);
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 20px;
    margin-bottom: 25px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({ theme }) => theme.white};
    border-radius: 25px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.primary};
    box-shadow: 0 8px 32px rgba(133, 76, 230, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.6s;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(133, 76, 230, 0.4);
        background: ${({ theme }) => theme.button};
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(-1px) scale(0.98);
    }
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 16px;
        border-radius: 20px;
        width: 100%;
        max-width: 280px;
    }
    @media (max-width: 480px) {
        padding: 10px 0;
        font-size: 14px;
        max-width: 250px;
    }
`;
