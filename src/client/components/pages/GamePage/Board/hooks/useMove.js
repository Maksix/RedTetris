import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { getOffsetX } from 'components/pages/GamePage/Board/helpers/getOffsetX';
import { getOffsetY } from 'components/pages/GamePage/Board/helpers/getOffsetY';
import { useDispatch, useSelector } from 'react-redux';
import { useRoomName } from 'hooks/useRoomName';
import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';

export const useMove = (moveConfig) => {
  const dispatch = useDispatch();
  const room = useRoomName();
  const {
    speed: speedInitial = 2000, board, setBoard, figure,
    isOver, setIsOver, updateFigure, nextFigure,
  } = moveConfig;
  const speedLevel = useSelector((state) => state.game.game.options.speed);
  const speed = speedInitial / speedLevel;
  const figureIndexStart = useMemo(() => getFigureStartIndex(figure), [figure]);
  const score = useSelector((state) => state.game.game.score);

  const [[offsetX, offsetY, rotateAngle], setOffset] = useState([figureIndexStart, undefined, 0]);

  const moveY = useCallback(() => {
    const offsetYConfig = {
      board,
      figure,
      setBoard,
      setIsOver,
      isOver,
      dispatch,
      room,
      rotateAngle,
      updateFigure,
      nextFigure,
      score,
    };
    setOffset(getOffsetY(offsetYConfig));
  }, [board, figure, setBoard, setIsOver, isOver, dispatch,
    room, rotateAngle, updateFigure, nextFigure, score]);

  const moveX = useCallback((e) => {
    if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 38) {
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

  return { offsetX, offsetY, rotateAngle };
};
