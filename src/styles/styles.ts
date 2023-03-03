import styled, { createGlobalStyle } from 'styled-components';

interface cardProps {
  padding?: string;
  height?: string;
  width?: string;
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #000000;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  margin: 24px 0px 0px;
  padding: 10px 30px;
  text-align: center;
  cursor: pointer;
`;

export const Card = styled.div<cardProps>`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  border-radius: 8px;
  flex-direction: column;
  font-size: 18px;
  line-height: 28px;
  width: ${(p) => p.width || 'auto'};
  height: ${(p) => p.height || 'auto'};
  padding: ${(p) => p.padding || '24px'};
  border: 1px solid black;
`;

interface themeProps {
  colors?: {
    background: string;
    text: string;
  };
}

export const Tag = styled.div<themeProps>`
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
  width: 5vw;
  font-weight: 500;
  font-size: 0.8vw;
  padding: 0.2vh 0.6vw;
  border-radius: 50px;
  background: ${(p) => p.colors?.text};
  color: ${(p) => p.colors?.background};
  .hole {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${(p) => p.colors?.background};
  }
`;

interface Props {
  theme: {
    id?: string;
    name?: string;
    colors?: {
      body?: string;
      text?: string;
      button?: {
        text?: string;
        background?: string;
      };
      link?: {
        text?: string;
        opacity?: number;
      };
    };
    font?: string;
  };
}

export const GlobalStyles = createGlobalStyle<Props>`
  body {
    background: ${({ theme }) => theme.colors?.body};
    color: ${({ theme }) => theme.colors?.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors?.link?.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors?.button?.background};
    color: ${({ theme }) => theme.colors?.button?.text};
  }
`;
