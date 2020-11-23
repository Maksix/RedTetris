const directions = {
  39: 1,
  37: -1,
};

const getMinMax = ([min, max], item, ind) => {
  const newMin = item && min === undefined ? ind : min;
  const newMax = item ? ind : max;

  return [newMin, newMax];
};

export const getOffsetX = (keyCode) => (board, figure) => ([prevOffsetX, prevOffsetY]) => {
  const offsetX = prevOffsetX + directions[keyCode];
  const isEmpty = board.every((rowItem, rowInd) => {
    if (rowInd < prevOffsetY) { // выше фигурки
      return true;
    }

    if (rowInd < prevOffsetY + figure.length) { // фигурка
      const figureRowIndex = rowInd - prevOffsetY;
      const minMax = figure[figureRowIndex].reduce(getMinMax, [undefined, undefined]);
      const [min, max] = minMax;

      if (min === undefined) { // если на этом ряду пусто у фигурки
        return true;
      }

      return rowItem.every((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;

        if (min + offsetX >= 0 && max + offsetX <= 9) { // фигурка помещается
          return !cellItem || !figure[figureRowIndex]?.[figureCellIndex];
        }

        return false; // фигурка не помещается
      });
    }

    return true; // ниже фигурки
  });

  if (isEmpty) {
    return [offsetX, prevOffsetY];
  }

  return [prevOffsetX, prevOffsetY];
};
