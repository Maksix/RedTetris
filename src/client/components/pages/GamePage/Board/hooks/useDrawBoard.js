import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from 'components/pages/GamePage/Board/Board.less';

export const useDrawBoard = ({
  isDummy = false, board, figureRotated, isOver, offsetX, offsetY, setDisappearRows,
}) => useMemo(() => board.map((rowItem, rowInd) => {
  if (!isDummy && rowItem.every(Boolean)) {
    setDisappearRows((prevDisappearRows) => [...prevDisappearRows, rowInd]);
  }
  const rowContent = rowItem.map((color, cellInd) => {
    if (!isDummy && !isOver && offsetY !== undefined && rowInd >= offsetY && cellInd >= offsetX) {
      const figureCellIndex = cellInd - offsetX;
      const figureRowIndex = rowInd - offsetY;
      const newFigureColor = figureRotated[figureRowIndex]?.[figureCellIndex] || color;

      return (
        <div className={cn(styles.cell, styles[newFigureColor])} key={cellInd} />
      );
    }
    return (
      <div className={cn(styles.cell, styles[color], { [styles.dummy]: isDummy })} key={cellInd} />
    );
  });

  return (
    <div key={rowInd}>
      <div className={styles.row}>{rowContent}</div>
    </div>
  );
}), [board, figureRotated, isDummy, isOver, offsetX, offsetY, setDisappearRows]);
