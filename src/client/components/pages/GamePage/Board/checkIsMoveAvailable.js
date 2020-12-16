const getMinMaxX = ([min, max], item, ind) => {
  const newMin = item && min === undefined ? ind : min;
  const newMax = item ? ind : max;

  return [newMin, newMax];
};

const getMinMaxY = ([min, max], item, ind) => {
  if (item.every((cell) => !cell)) {
    const newMin = min === undefined ? ind : min;
    const newMax = !max || ind > max ? ind : max;

    return [newMin, newMax];
  }
  return [min, max];
};

export const checkIsMoveAvailable = (config) => {
  const {
    board, offsetY, offsetX, figure,
  } = config;

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
