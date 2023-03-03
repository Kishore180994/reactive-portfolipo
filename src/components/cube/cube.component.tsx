import React from 'react';
import { CubeContainer } from './cube.styles';

interface Props {
  delay: string;
}
const Cube: React.FC<Props> = ({ delay }) => {
  return (
    <CubeContainer delay={delay}>
      <div className='scene'>
        <div className='face top'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
        <div className='face bottom'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
        <div className='face left'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
        <div className='face right'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
        <div className='face front'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
        <div className='face back'>
          {/* <img src='images/pic1.jpg' alt='profile' /> */}
        </div>
      </div>
    </CubeContainer>
  );
};

export default Cube;
