import { figures } from 'helpers/figures';
import { getRandomInt } from 'helpers/getRandomInt';
import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/helpers/checkIsMoveAvailable';
import { changeMap } from 'actions/gameActions';
import { getFigureStartIndex } from 'components/pages/GamePage/Board/helpers/getFigureStartIndex';

export const getOffsetY = (offsetYConfig) => ([offsetX, prevOffsetY, rotateAngle]) => {
  const {
    board, figure, setBoard, setFigure, setIsOver, isOver, dispatch, room,
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
    if (rowInd < prevOffsetY) { // выше фигурки
      return prevBoard[rowInd];
    }

    if (rowInd < prevOffsetY + figure.length) { // фигурка
      return rowItem.map((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - prevOffsetY;
        return figure[figureRowIndex]?.[figureCellIndex] || cellItem;
      });
    }

    return prevBoard[rowInd]; // ниже фигурки
  })));

  const newFigure = figures[getRandomInt(7)];
  setFigure(newFigure);
  dispatch(changeMap(room, board));
  const newOffsetX = getFigureStartIndex(newFigure);
  return [newOffsetX, undefined, rotateAngle];
};
