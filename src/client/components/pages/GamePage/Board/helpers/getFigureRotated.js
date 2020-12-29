import { rotate } from 'components/pages/GamePage/Board/helpers/rotate';

export const getFigureRotated = ({ figure, rotateAngle }) => {
  let figureCopy = figure.slice();
  for (let i = rotateAngle; i; i -= 1) {
    figureCopy = rotate(figureCopy);
  }
  return figureCopy;
};
