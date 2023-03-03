import styled from 'styled-components';
import {
  bounce,
  glitchOn,
  heightIncrease,
  vanishAndAppear,
  widthIncrease,
} from './home.keyframes';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  cursor: none;
  z-index: 10;
  border-bottom: 1px solid white;
  .role {
    display: flex;
    justify-content: center;
    /* border: 1px solid white; */
    width: 25vw;
    position: relative;
    top: 7vh;
    left: 53vw;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ${glitchOn} 3s linear forwards;
    .tag {
      margin: 0 5px;
    }
    ::before {
      content: '<roles>';
      position: absolute;
      font-size: 0.9vw;
      top: -3.2vh;
      left: 1vw;
      color: #858d94;
      font-weight: 700;
      font-family: cursive;
    }
    ::after {
      content: '</roles>';
      position: absolute;
      font-size: 0.9vw;
      top: 3.2vh;
      left: 1vw;
      color: #858d94;
      font-family: cursive;
      font-weight: 700;
    }
  }
  .horizontal {
    position: absolute;
    top: 70vh;
    left: 0;
    width: 100vw;
    height: 8vh;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    background-color: #ffffff;
    mix-blend-mode: difference;
    animation: ${widthIncrease} 2s linear forwards;
    .icons {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      height: 100%;
      cursor: default;
      opacity: 0;
      animation: ${vanishAndAppear} 1s linear forwards;
      animation-delay: 2s;
    }
  }
  .vertical {
    position: absolute;
    top: 0;
    left: 75vw;
    width: 5vw;
    height: 100vh;
    border-left: 1px solid white;
    border-right: 1px solid white;
    background-color: #ffffff;
    mix-blend-mode: difference;
    animation: ${heightIncrease} 2s linear forwards;
  }
  .name {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 4vw;
    margin: 0px 10%;
    position: relative;
    mix-blend-mode: difference;
    animation-delay: 2s;
    .middle {
      margin: 0 15px;
      color: black;
      text-shadow: 0 0 7px white;
    }
    ::before {
      content: '<name>';
      position: absolute;
      font-size: 0.9vw;
      top: -2vh;
      left: -1vw;
      color: #858d94;
      font-family: cursive;
    }
    ::after {
      content: '</name>';
      position: absolute;
      font-size: 0.9vw;
      top: 8.5vh;
      left: -1vw;
      color: #858d94;
      font-family: cursive;
    }
  }
  .scroll {
    position: absolute;
    bottom: 20px;
    left: 46vw;
    height: 40px;
    width: 25px;
    border-radius: 50px;
    border: 1px solid ${(p) => p.theme.colors.text};
    box-shadow: inset 0px -10px 1px 12px ${(p) => p.theme.colors.text};
    animation: ${bounce} 1s ease-in-out infinite reverse;
    ::before {
      content: 'Scroll down';
      width: 100px;
      position: absolute;
      color: ${(p) => p.theme.colors.text};
      bottom: -20px;
      left: -1.3vw;
      font-weight: 500;
      font-size: 0.8vw;
    }
  }
`;

interface themeProps {
  colors?: {
    background: string;
    text: string;
  };
}

export const Solar = styled.div<themeProps>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 0;

  .logo {
    position: relative;
    opacity: 0;
    width: 1vw;
    height: 1vh;
    top: 15vh;
    left: 10vw;
    transform: translate(-50%, -50%);
    animation: ${glitchOn} 3s linear forwards;

    ::before {
      content: '<logo>';
      position: absolute;
      font-size: 0.8vw;
      top: -3vh;
      left: -1vw;
      font-weight: 600;
      color: #858d94;
      font-family: cursive;
    }
    ::after {
      content: '</logo>';
      position: absolute;
      font-size: 0.8vw;
      font-weight: 600;
      top: 9.5vh;
      left: -1vw;
      color: #858d94;
      font-family: cursive;
    }
    .circle {
      position: absolute;
      width: 4vw;
      height: 8vh;
      border: 1px solid ${(p) => p.theme.colors.text};
      border-radius: 50%;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2vw;
    }
    .a {
      top: 0;
      left: 0;
      background-color: ${(p) => p.theme.colors.text};
      color: ${(p) => p.theme.colors.background};
      mix-blend-mode: difference;
      justify-content: space-evenly;
      .c {
      }
    }
    .b {
      top: 0;
      left: 2vw;
      mix-blend-mode: difference;
      background-color: ${(p) => p.theme.colors.text};
      color: ${(p) => p.theme.colors.background};
      justify-content: space-evenly;
      .d {
      }
    }
  }
`;

export const Icon = styled.a`
  height: 100%;
  font-size: 2vw;
  margin: 0px 4vw;
  transition: transform 0.5s;
  cursor: pointer;
  background-color: black;
  color: #ffffff;
  border-radius: 50%;
  padding: 0 1vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: attr(aria-label);
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    /* border: 1px solid white; */
    bottom: -3vh;
    left: -0.5vw;
    width: 5vw;
    height: 10px;
    font-weight: 600;
  }

  :hover {
    transform: scale(1.5);
    ::before {
      display: flex;
      font-size: 1vw;
      transform: scale(0.5);
    }
  }
`;
