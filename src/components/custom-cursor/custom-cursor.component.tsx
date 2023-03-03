import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectDivRef,
  selectHoverState,
} from '../../redux/reducers/cursor/cursor.selector';
import { CursorContainer } from './custom-cursor.styles';

interface Props {
  hoverState?: boolean;
  divRef?: string;
}

const CustomCursor: React.FC<Props> = ({ hoverState, divRef }) => {
  const [mousePosition, setMousePosition] = useState({ x: 180, y: 340 });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <CursorContainer
      x={mousePosition.x}
      y={mousePosition.y}
      className='cursor'
      hovered={hoverState}
      divRef={divRef}></CursorContainer>
  );
};

export const mapStateToProps = createStructuredSelector({
  hoverState: selectHoverState,
  divRef: selectDivRef,
});

export default connect(mapStateToProps)(CustomCursor);
