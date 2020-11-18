import { useCallback, useEffect, useState } from 'react';

const getOffsetX = (keyCode) => (prevOffsetX) => {
  if (keyCode === 39) { // > arrow
    if (prevOffsetX < 9) {
      return prevOffsetX + 1;
    }
  } else if (prevOffsetX > 0) { // < arrow
    return prevOffsetX - 1;
  }
  return prevOffsetX;
};

export const useMoveFigureX = () => {
  const [offsetX, setOffsetX] = useState(0);

  const move = useCallback((e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      setOffsetX(getOffsetX(e.keyCode));
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', move);
    return () => window.removeEventListener('keydown', move);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return offsetX;
};
