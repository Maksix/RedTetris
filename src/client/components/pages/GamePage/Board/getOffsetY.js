export const getOffsetY = (board, figure, setBoard) => ([offsetX, prevOffsetY]) => {
  const offsetY = prevOffsetY + 1;

  const isEmpty = board.every((rowItem, rowInd) => {
    if (rowInd < offsetY) { // борда выше фигурки
      return true;
    }

    if (rowInd < offsetY + figure.length) { // борда в пределах фигурки
      return rowItem.every((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - offsetY;
        console.log(cellItem);
        return !cellItem || !figure[figureRowIndex]?.[figureCellIndex];
      });
    }

    return true; // борда ниже фигурки
  });

  if (isEmpty) {
    return [offsetX, offsetY];
  }

  // если не поместилось
  setBoard((prevBoard) => prevBoard.map((rowItem, rowInd) => {
    if (rowInd < offsetY) { // выше фигурки
      return prevBoard[rowInd];
    }

    if (rowInd < offsetY + figure.length) { // фигурка
      return rowItem.map((cellItem, cellInd) => {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - offsetY;
        return figure[figureRowIndex]?.[figureCellIndex] || cellItem;
      });
    }

    return prevBoard[rowInd]; // ниже фигурки
  }));

  console.log('DONE'); // отправлять событие, менять фигуру
  return [0, 0];
};
