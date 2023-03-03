import styled, { css } from 'styled-components';
import { cursorPulsate } from '../../keyframes/keyframes';

interface Props {
  x: number;
  y: number;
  hovered?: boolean;
  divRef?: string;
}

export const CursorContainer = styled.div<Props>`
  position: fixed;
  z-index: 999;
  color: #ffffff;
  top: ${(p) => p.y}px;
  left: ${(p) => p.x}px;
  pointer-events: none;
  user-select: none;
  border-radius: 50%;
  border: 1px solid black;
  transition: linear;
  pointer-events: none;
  ${(p) =>
    p.hovered
      ? css`
          width: 0px;
          height: 0px;
          transform: translate(-50%, -50%);
          background: #ffffff;
          mix-blend-mode: difference;
          overflow: hidden;
          border: none;
          cursor: pointer;
          /* animation: ${cursorPulsate} 1s ease-in-out infinite; */
        `
      : css`
          width: 20px;
          height: 20px;
          transform: translate(-50%, -50%);
          background: #ffffff;
          mix-blend-mode: difference;
          overflow: hidden;
          border: none;
        `}
`;
