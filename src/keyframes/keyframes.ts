import { keyframes } from 'styled-components';

export const rotateCube = keyframes`
    16% { transform: rotateY(-90deg); transform: rotateY(-90deg); }
    33% { transform: rotateY(-90deg) rotateZ(90deg); transform: rotateY(-90deg) rotateZ(90deg); }
    50% { transform: rotateY(180deg) rotateZ(90deg); transform: rotateY(180deg) rotateZ(90deg); }
    66% { transform: rotateY(90deg) rotateX(90deg); transform: rotateY(90deg) rotateX(90deg); }
    83% { transform: rotateX(90deg); transform: rotateX(90deg); }
`;

export const circleRotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

export const cursorPulsate = keyframes`
    0%{
        width: 30px;
        height: 30px;
    }
    50%{
        width: 20px;
        height: 20px;
    }
    100%{
        width: 30px;
        height: 30px;
    }

`;
