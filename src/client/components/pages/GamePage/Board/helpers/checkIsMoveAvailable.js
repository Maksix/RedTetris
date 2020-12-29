import { getMinMaxY } from 'components/pages/GamePage/Board/helpers/getMinMaxY';
import { getMinMaxX } from 'components/pages/GamePage/Board/helpers/getMinMaxX';
import { getFigureRotated } from 'components/pages/GamePage/Board/helpers/getFigureRotated';

export const checkIsMoveAvailable = (config) => {
  const {
    board, offsetY, offsetX, figure: prevFigure, rotateAngle,
  } = config;
  const figureCopy = [...prevFigure];
  const figure = getFigureRotated({ figure: figureCopy, rotateAngle });

  // фигурка еще не появилась на экране, а мы уже хотим ее двигать, непорядок
  if (offsetY === undefined) return false;

  return board.every((rowItem, rowInd) => {
    if (rowInd < offsetY) { // борда выше фигурки
      return true;
    }

    if (rowInd < offsetY + figure.length) { // борда в пределах фигурки
      const figureRowIndex = rowInd - offsetY;
      const minMaxX = figure[figureRowIndex].reduce(getMinMaxX, [undefined, undefined]);
      const minMaxY = figure.reduce(getMinMaxY, [undefined, undefined]);

      const [minX, maxX] = minMaxX;
      let [, maxY] = minMaxY;
      maxY = maxY || figure.length;

      if (minX === undefined && maxY + offsetY <= 19) { // если на этом ряду пусто у фигурки
        return true;
      }

      if (maxY + offsetY > 20) { // вышла за предел
        return false;
      }

      return rowItem.every((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;

        if (minX + offsetX >= 0 && maxX + offsetX <= 9) { // фигурка помещается
          return !cellItem || !figure[figureRowIndex]?.[figureCellIndex];
        }

        return false; // фигурка не помещается
      });
    }

    return true; // борда ниже фигурки
  });
};
