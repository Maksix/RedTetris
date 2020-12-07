import { useCallback, useEffect, useState } from 'react';
import { getOffsetX } from 'components/pages/GamePage/Board/getOffsetX';
import { getOffsetY } from 'components/pages/GamePage/Board/getOffsetY';

export const useMove = (speed = 1000, board, setBoard, figure) => {
  const [[offsetX, offsetY], setOffset] = useState([0, 0]);

  const moveX = useCallback((e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      const checkIfMoveXAvailable = getOffsetX(e.keyCode);
      setOffset(checkIfMoveXAvailable(board, figure));
    }
  }, [board, figure]);

  const moveY = useCallback(() => (
    setOffset(getOffsetY(board, figure, setBoard))
  ), [board, figure, setBoard]);

  useEffect(() => {
    document.addEventListener('keydown', moveX);
    return () => document.removeEventListener('keydown', moveX);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const timerId = setInterval(moveY, speed);
    return () => clearInterval(timerId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { offsetX, offsetY };
};
