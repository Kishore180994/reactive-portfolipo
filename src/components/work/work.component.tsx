import React, { MutableRefObject } from 'react';
import { WorkContainer } from './work.styles';

interface props {
  workRef: MutableRefObject<null>;
}

const Work: React.FC<props> = ({ workRef }) => {
  return (
    <div ref={workRef}>
      <WorkContainer></WorkContainer>
    </div>
  );
};

export default Work;
