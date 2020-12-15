import { figures } from 'helpers/figures';
import { getRandomInt } from 'helpers/getRandomInt';
import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/checkIsMoveAvailable';

export const getOffsetY = (offsetYConfig) => ([offsetX, prevOffsetY]) => {
  const {
    board, figure, setBoard, setFigure, setIsOver, isOver,
  } = offsetYConfig;
  const offsetY = prevOffsetY !== undefined && !isOver ? prevOffsetY + 1 : 0;

  const isAvailable = checkIsMoveAvailable({
    board, figure, offsetX, offsetY,
  });

  if (isAvailable && !isOver) {
    return [offsetX, offsetY];
  }

  // если не поместилось
  if (offsetY <= 0 && !isOver) {
  //   let gameOverOffset = offsetY - 1;
  //   let isAvailableUpper = false;
  //   // eslint-disable-next-line no-plusplus
  //   while (!isAvailableUpper) {
  //     console.log('HERE', isAvailableUpper, gameOverOffset);
  //     isAvailableUpper = checkIsMoveAvailable({
  //       board, figure, offsetX, offsetY: gameOverOffset,
  //     });
  //     gameOverOffset -= 1;
  //   }
    setIsOver(true);
    console.log('game over');

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

  setFigure(figures[getRandomInt(7)]);

  console.log('DONE'); // отправлять событие, менять фигуру
  return [0, undefined];
};
