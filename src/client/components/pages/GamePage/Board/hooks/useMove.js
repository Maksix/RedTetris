import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { getOffsetX } from 'components/pages/GamePage/Board/helpers/getOffsetX';
import { getOffsetY } from 'components/pages/GamePage/Board/helpers/getOffsetY';
import { useDispatch } from 'react-redux';
import { useRoomName } from 'hooks/useRoomName';
import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';

export const useMove = (moveConfig) => {
  const dispatch = useDispatch();
  const room = useRoomName();
  const {
    speed = 1000, board, setBoard, figure, setFigure, isOver, setIsOver,
  } = moveConfig;

  const figureIndexStart = useMemo(() => getFigureStartIndex(figure), [figure]);

  const [[offsetX, offsetY], setOffset] = useState([figureIndexStart, undefined]);

  const moveY = useCallback(() => {
    const offsetYConfig = {
      board, figure, setBoard, setFigure, setIsOver, isOver, dispatch, room,
    };
    setOffset(getOffsetY(offsetYConfig));
  }, [board, dispatch, figure, isOver, room, setBoard, setFigure, setIsOver]);

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
