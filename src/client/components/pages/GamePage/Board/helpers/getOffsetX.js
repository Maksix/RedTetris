import { checkIsMoveAvailable } from 'components/pages/GamePage/Board/helpers/checkIsMoveAvailable';
import { getFilledArray } from 'helpers/getFilledArray';

const directions = {
  39: 1,
  37: -1,
};

const rotateAngles = getFilledArray(4);

export const getOffsetX = (keyCode) => (board, figure) => (
  [prevOffsetX, offsetY, prevRotateAngle],
) => {
  const offsetX = keyCode === 38 ? prevOffsetX : prevOffsetX + directions[keyCode];
  let rotateAngle = prevRotateAngle;
  if (keyCode === 38) {
    const ind = rotateAngles.findIndex((angle) => angle === prevRotateAngle) + 1;
    rotateAngle = ind >= rotateAngles.length ? 0 : ind;
  }
  const isAvailable = checkIsMoveAvailable({
    board, figure, offsetX, offsetY, rotateAngle,
  });

  if (isAvailable) {
    return [offsetX, offsetY, rotateAngle];
  }

  return [prevOffsetX, offsetY, prevRotateAngle];
};
