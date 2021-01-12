import {
  useMemo, useState, useEffect, useCallback,
} from 'react';
import { boardInitialMock } from 'helpers/boardInitialMock';
import { useMove } from 'components/pages/GamePage/Board/hooks/useMove';
import { useDisappearRows } from 'components/pages/GamePage/Board/hooks/useDisappearRows';
import { useSelector, useDispatch } from 'react-redux';
import { getNewPieces } from 'actions/pieceActions';
import { useRoomName } from 'hooks/useRoomName';
import { getFigureRotated } from 'components/pages/GamePage/Board/helpers/getFigureRotated';
import { useDrawBoard } from 'components/pages/GamePage/Board/hooks/useDrawBoard';

const SPEED = {
  NORMAL: 1000,
  FAST: 700,
  TEST: 200,
};

export const useBoard = () => {
  const { pieces } = useSelector((state) => state.pieces);
  const dispatch = useDispatch();
  const room = useRoomName();
  const gameStatus = useSelector((state) => state.game.game.status);

  const [figureInd, setFigureInd] = useState(0);

  useEffect(() => {
    if (gameStatus === 'started' && (!pieces || pieces.length - figureInd < 20)) {
      dispatch(getNewPieces(room));
    }
  }, [dispatch, figureInd, gameStatus, pieces, room]);
  const [board, setBoard] = useState(boardInitialMock);
  const [figure, setFigure] = useState(pieces[figureInd]);
  const [isOver, setIsOver] = useState(false);

  const nextFigure = useMemo(() => pieces[figureInd + 1], [figureInd, pieces]);

  const updateFigure = useCallback(() => {
    setFigure(nextFigure);
    setFigureInd((prevInd) => prevInd + 1);
  }, [nextFigure]);

  const { offsetY, offsetX, rotateAngle } = useMove({
    speed: SPEED.FAST,
    board,
    setBoard,
    figure,
    isOver,
    setIsOver,
    updateFigure,
    nextFigure,
  });

  const figureRotated = useMemo(() => (
    getFigureRotated({ figure, rotateAngle })
  ), [figure, rotateAngle]);

  const { setDisappearRows } = useDisappearRows(setBoard);

  return useDrawBoard({
    board, figureRotated, isOver, offsetX, offsetY, setDisappearRows,
  });
};
