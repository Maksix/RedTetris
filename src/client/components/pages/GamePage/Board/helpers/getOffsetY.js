import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/helpers/checkIsMoveAvailable';
import { changeMap } from 'actions/gameActions';
import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';
import { getFigureRotated } from 'components/pages/GamePage/Board/helpers/getFigureRotated';

export const getOffsetY = (offsetYConfig) => ([offsetX, prevOffsetY, rotateAngle]) => {
  const {
    board, figure, setBoard, setIsOver, isOver, dispatch, room, updateFigure, nextFigure,
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
    // let gameOverOffset = offsetY - 1;
    // let isAvailableUpper = false;
    // while (!isAvailableUpper) {
    //   isAvailableUpper = checkIsMoveAvailable({
    //     board, figure, offsetX, offsetY: gameOverOffset,
    //   });
    //   gameOverOffset -= 1;
    // }
    setIsOver(true);

    // console.log('send action game over');

    // return [offsetX, gameOverOffset];
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
