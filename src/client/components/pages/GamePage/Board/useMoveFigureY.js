import { useEffect, useState } from 'react';

const getOffsetY = (prevOffsetY) => {
  if (prevOffsetY < 19) {
    return prevOffsetY + 1;
  }
  return prevOffsetY;
};

export const useMoveFigureY = (speed = 1000) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => setOffsetY(getOffsetY), speed);
    return () => clearInterval(timerId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return offsetY;
};
