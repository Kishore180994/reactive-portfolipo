import React, { MutableRefObject, RefObject, useEffect, useRef } from 'react';
import useMousePosition from '../../../hooks/useMousePosition';
import { SkillContainer } from './skill.styles';

const Skill: React.FC = ({ children }) => {
  const {
    mousePosition: { x, y },
    setMousePosition,
  } = useMousePosition();
  const ref: MutableRefObject<any> = useRef();
  useEffect(() => {
    let cur: HTMLDivElement = ref.current;
  }, [x, y]);

  return <SkillContainer ref={ref}>{children}</SkillContainer>;
};

export default Skill;
