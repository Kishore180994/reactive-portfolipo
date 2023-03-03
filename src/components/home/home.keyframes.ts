import { keyframes } from 'styled-components';

export const widthReduce = keyframes`
    to{
        width: 0%;
    }
`;

export const vanishAndAppear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
      opacity: 100%;
    }
`;

export const heightIncrease = keyframes`
    0%{
        height: 0vh;
    }
    100%{
       height: 100vh
    }
`;

export const widthIncrease = keyframes`
    0%{
        width: 0vw;
    }
    100%{
        width: 100vw;
    }
`;

export const revolute = keyframes`
    from {-webkit-transform: rotateZ(0deg)}
    to {-webkit-transform: rotateZ(360deg)}
`;

export const bounce = keyframes`
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-20px);
    }
`;

export const glitchOn = keyframes`
    0%{
        opacity: 0;
    }
    10%{
        opacity: 1;
    }
    12%{
        opacity: 0;
    }
    20%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    60%{
        opacity: 1;
    }
    70%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`;
