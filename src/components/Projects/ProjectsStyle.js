import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 20px 100px 20px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
        padding: 10px 16px 80px 16px;
    }
    @media (max-width: 480px) {
        padding: 10px 12px 60px 12px;
    }
`;

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
    padding: 0 20px;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0 16px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
        padding: 0 12px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        font-size: 12px;
        margin: 16px 0px;
    }
    @media (max-width: 480px) {
        font-size: 11px;
        flex-direction: column;
        width: 100%;
        max-width: 280px;
    }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 12px;
        border-radius: 4px;
    }
    @media (max-width: 480px) {
        padding: 8px 16px;
        flex: 1;
        border-radius: 0;
        &:first-child {
            border-radius: 10px 10px 0 0;
        }
        &:last-child {
            border-radius: 0 0 10px 10px;
        }
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    width: 100%;
    
    @media (max-width: 768px) {
        gap: 20px;
        justify-content: center;
    }
    
    @media (max-width: 480px) {
        gap: 16px;
        flex-direction: column;
        align-items: center;
    }
`;
