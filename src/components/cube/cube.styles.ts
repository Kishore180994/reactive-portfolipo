import styled from 'styled-components';
import { rotateCube } from '../../keyframes/keyframes';

interface Props {
  delay: string;
}

export const CubeContainer = styled.div<Props>`
  perspective: 1000px;
  position: relative;
  .scene {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: ${rotateCube} 12s ease-in-out infinite;
    animation-delay: ${(p) => p.delay}s;
    position: relative;
    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .front {
      transform: rotateY(0deg) translateZ(200px);
      background-color: #4d4e4f;
    }
    .right {
      transform: rotateY(90deg) translateZ(200px);
      background-color: #5291c8;
    }
    .back {
      transform: rotateY(180deg) translateZ(200px);
      background-color: #174f2c;
    }
    .left {
      transform: rotateY(-90deg) translateZ(200px);
      background-color: #d9b341;
    }
    .top {
      transform: rotateX(90deg) translateZ(200px);
      background-color: #4c3797;
    }
    .bottom {
      transform: rotateX(-90deg) translateZ(200px);
      background-color: #86237b;
    }
  }
`;
