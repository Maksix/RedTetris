import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { getOffsetX } from 'components/pages/GamePage/Board/getOffsetX';
import { getOffsetY } from 'components/pages/GamePage/Board/getOffsetY';

export const useMove = (moveConfig) => {
  const {
    speed = 1000, board, setBoard, figure, setFigure, isOver, setIsOver,
  } = moveConfig;
  const [[offsetX, offsetY], setOffset] = useState([0, undefined]);

  const moveY = useCallback(() => {
    const offsetYConfig = {
      board, figure, setBoard, setFigure, setIsOver, isOver,
    };
    setOffset(getOffsetY(offsetYConfig));
  }, [board, figure, isOver, setBoard, setFigure, setIsOver]);

  const moveX = useCallback((e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      const checkIfMoveXAvailable = getOffsetX(e.keyCode);
      setOffset(checkIfMoveXAvailable(board, figure));
    }
    if (e.keyCode === 40) {
      moveY();
    }
  }, [board, figure, moveY]);

  const timerId = useRef();
  useEffect(() => {
    if (!isOver) {
      document.addEventListener('keydown', moveX);
    } else {
      document.removeEventListener('keydown', moveX);
    }
    return () => document.removeEventListener('keydown', moveX);
  }, [isOver, moveX]);

  useEffect(() => {
    if (!isOver) {
      timerId.current = setInterval(moveY, speed);
    } else {
      clearInterval(timerId.current);
    }
    return () => clearInterval(timerId.current);
  }, [isOver, moveY, speed]);

  return { offsetX, offsetY };
};
