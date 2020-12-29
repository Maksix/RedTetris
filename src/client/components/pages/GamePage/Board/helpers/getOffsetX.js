import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/helpers/checkIsMoveAvailable';

const directions = {
  39: 1,
  37: -1,
};

export const getOffsetX = (keyCode) => (board, figure) => ([prevOffsetX, offsetY]) => {
  const offsetX = prevOffsetX + directions[keyCode];

  const isAvailable = checkIsMoveAvailable({
    board, figure, offsetX, offsetY,
  });

  if (isAvailable) {
    return [offsetX, offsetY];
  }

  return [prevOffsetX, offsetY];
};
