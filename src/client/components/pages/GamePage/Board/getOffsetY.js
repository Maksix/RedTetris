export const getOffsetY = (board, figure, setBoard) => ([prevOffsetX, prevOffsetY]) => {
  const offsetY = prevOffsetY + 1;

  const isEmpty = board.every((rowItem, rowInd) => {
    if (rowInd < offsetY) { // выше фигурки
      return true;
    }

    if (rowInd < offsetY + figure.length) { // фигурка
      return rowItem.every((cellItem, cellInd) => {
        const figureCellIndex = cellInd - prevOffsetX;
        const figureRowIndex = rowInd - offsetY;
        return !cellItem || !figure[figureRowIndex]?.[figureCellIndex];
      });
    }

    return true; // ниже фигурки
  });

  if (isEmpty) {
    return [prevOffsetX, offsetY];
  }

  // если не поместилось
  setBoard((prevBoard) => prevBoard.map((rowItem, rowInd) => {
    if (rowInd < offsetY) { // выше фигурки
      return prevBoard[rowInd];
    }

    if (rowInd < offsetY + figure.length) { // фигурка
      return rowItem.map((cellItem, cellInd) => {
        const figureCellIndex = cellInd - prevOffsetX;
        const figureRowIndex = rowInd - offsetY;
        return figure[figureRowIndex]?.[figureCellIndex] || cellItem;
      });
    }

    return prevBoard[rowInd]; // ниже фигурки
  }));

  console.log('DONE'); // отправлять событие, менять фигуру
  return [0, 0];
};
