import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/helpers/checkIsMoveAvailable';
import { changeMap, endGame } from 'actions/gameActions';
import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';
import { getFigureRotated } from 'components/pages/GamePage/Board/helpers/getFigureRotated';
import { addLeaderboard } from 'actions/leaderboardActions';

export const getOffsetY = (offsetYConfig) => ([offsetX, prevOffsetY, rotateAngle]) => {
  const {
    board, figure, setBoard, setIsOver, isOver, dispatch, room, updateFigure, nextFigure, score,
  } = offsetYConfig;
  const offsetY = prevOffsetY !== undefined && !isOver ? prevOffsetY + 1 : 0;

  const isAvailable = checkIsMoveAvailable({
    board, figure, offsetX, offsetY, rotateAngle,
  });

  if (isAvailable && !isOver) {
    return [offsetX, offsetY, rotateAngle];
  }

  // если не поместилось
  if (offsetY <= 0 && !isOver) {
    setIsOver(true);
    dispatch(endGame());
    dispatch(addLeaderboard(room, score));
  }

  setBoard((prevBoard) => (prevBoard.map((rowItem, rowInd) => {
    const rotatedFigure = getFigureRotated({ figure, rotateAngle });
    if (rowInd < prevOffsetY) { // выше фигурки
      return prevBoard[rowInd];
    }

    if (rowInd < prevOffsetY + rotatedFigure.length) { // фигурка
      return rowItem.map((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - prevOffsetY;
        return rotatedFigure[figureRowIndex]?.[figureCellIndex] || cellItem;
      });
    }

    return prevBoard[rowInd]; // ниже фигурки
  })));

  updateFigure();
  dispatch(changeMap(room, board));
  const newOffsetX = getFigureStartIndex(nextFigure);
  return [newOffsetX, undefined, rotateAngle];
};
