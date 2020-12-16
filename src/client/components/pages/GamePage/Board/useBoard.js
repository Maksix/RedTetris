import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import styles from 'components/pages/GamePage/Board/Board.less';
import { boardInitialMock } from 'helpers/boardInitialMock';
// import { useRotateFigure } from 'components/pages/GamePage/Board/useRotateFigure';
import { figures } from 'helpers/figures';
import { getRandomInt } from 'helpers/getRandomInt';
import { useMove } from 'components/pages/GamePage/Board/useMove';
import { useDisappearRows } from 'components/pages/GamePage/Board/useDisappearRows';

const SPEED = {
  NORMAL: 1000,
  FAST: 700,
  TEST: 200,
};

export const useBoard = () => {
  const [board, setBoard] = useState(boardInitialMock);
  const [figure, setFigure] = useState(figures[getRandomInt(7)]);
  const [isOver, setIsOver] = useState(false);

  const { offsetY, offsetX } = useMove({
    speed: SPEED.FAST,
    board,
    setBoard,
    figure,
    setFigure,
    isOver,
    setIsOver,
  });

  /* Вращение не учитывается */
  // useRotateFigure(setFigure);

  const { setDisappearRows } = useDisappearRows(setBoard);

  return useMemo(() => board.map((rowItem, rowInd) => {
    if (rowItem.every(Boolean)) {
      setDisappearRows((prevDisapearRows) => [...prevDisapearRows, rowInd]);
    }
    const rowContent = rowItem.map((color, cellInd) => {
      if (!isOver && offsetY !== undefined && rowInd >= offsetY && cellInd >= offsetX) {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - offsetY;
        const newFigureColor = figure[figureRowIndex]?.[figureCellIndex] || color;

        return (
          <div className={cn(styles.cell, styles[newFigureColor])} key={cellInd} />
        );
      }
      return (
        <div className={cn(styles.cell, styles[color])} key={cellInd} />
      );
    });

    return (
      <div key={rowInd}>
        <div className={styles.row}>{rowContent}</div>
      </div>
    );
  }), [board, figure, isOver, offsetX, offsetY, setDisappearRows]);
};
