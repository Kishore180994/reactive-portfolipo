import { useEffect, useRef, useState } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 180, y: 340 });
  const mouseMoveHandler = useRef((event: MouseEvent) => {});

  mouseMoveHandler.current = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler.current);
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler.current);
    };
  }, []);

  return { mousePosition, setMousePosition };
};

export default useMousePosition;
