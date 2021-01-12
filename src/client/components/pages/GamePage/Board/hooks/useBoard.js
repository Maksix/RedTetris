import { useMemo, useState } from 'react';
import { boardInitialMock } from 'helpers/boardInitialMock';
// import { useRotateFigure } from 'components/pages/GamePage/Board/useRotateFigure';
import { figures } from 'helpers/figures';
import { getRandomInt } from 'helpers/getRandomInt';
import { useMove } from 'components/pages/GamePage/Board/hooks/useMove';
import { useDisappearRows } from 'components/pages/GamePage/Board/hooks/useDisappearRows';
// import { useSelector } from 'react-redux';
// import { getNewPieces } from 'actions/pieceActions';
// import { useRoomName } from 'hooks/useRoomName';
import { getFigureRotated } from 'components/pages/GamePage/Board/helpers/getFigureRotated';
import { useDrawBoard } from 'components/pages/GamePage/Board/hooks/useDrawBoard';

const SPEED = {
  NORMAL: 1000,
  FAST: 700,
  TEST: 200,
};

export const useBoard = () => {
  // const pieces = useSelector((state) => state.pieces);
  // const dispatch = useDispatch();
  // const room = useRoomName();

  // dispatch(getNewPieces(room));
  // console.log(pieces);
  // const gameStatus = useSelector((state) => state.game.game.status);
  // console.log(gameStatus);
  // const [testInd, setTestInd] = useState(0);
  // const room = useRoomName();
  // const dispatch = useDispatch();

  // const
  // useEffect(() => {
  //   dispatch(getNewPieces(room));
  // }, []);
  const [board, setBoard] = useState(boardInitialMock);
  // const [figure, setFigure] = useState(pieces[testInd]);

  const [figure, setFigure] = useState(figures[getRandomInt(7)]);
  const [isOver, setIsOver] = useState(false);

  const { offsetY, offsetX, rotateAngle } = useMove({
    speed: SPEED.FAST,
    board,
    setBoard,
    figure,
    setFigure,
    isOver,
    setIsOver,
  });

  const figureRotated = useMemo(() => (
    getFigureRotated({ figure, rotateAngle })
  ), [figure, rotateAngle]);

  const { setDisappearRows } = useDisappearRows(setBoard);

  return useDrawBoard({
    board, figureRotated, isOver, offsetX, offsetY, setDisappearRows,
  });
};
