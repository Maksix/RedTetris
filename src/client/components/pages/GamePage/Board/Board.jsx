import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { useMoveFigureY } from 'components/pages/GamePage/Board/useMoveFigureY';
import { getRandomInt } from 'helpers/getRandomInt';
import { boardInitialMock } from 'helpers/boardInitialMock';
import { figures } from 'helpers/figures';
import { useInitialFocus } from 'components/pages/GamePage/Board/useInitialFocus';
import { useRotateFigure } from 'components/pages/GamePage/Board/useRotateFigure';
import { useMoveFigureX } from './useMoveFigureX';
import styles from './Board.less';

const SPEED = {
  NORMAL: 1000,
  FAST: 700,
};

export const Board = () => {
  // TODO пересчитывать борду, когда фигурка падает
  //  фигурки будут приходить списком, менять фигурки, исключать те, что уже были
  const [board, setBoard] = useState(boardInitialMock); //eslint-disable-line
  const [figure, setFigure] = useState(figures[getRandomInt(3)]);

  /* Чтобы изначально работали все клавиши несмотря ни на что */
  const containerRef = useInitialFocus();

  /* Отклонение по горизонтали */
  const offsetX = useMoveFigureX();

  /* Отклонение по вертикали */
  const offsetY = useMoveFigureY(SPEED.NORMAL);

  /* Вращение */
  useRotateFigure(setFigure);

  const boardContent = useMemo(() => board.map((rowItem, rowInd) => {
    const rowContent = rowItem.map(({ color }, cellInd) => {
      if (rowInd >= offsetY && cellInd >= offsetX) {
        const figureCellIndex = cellInd - offsetX;
        const figureRowIndex = rowInd - offsetY;
        const newFigureColor = figure[figureRowIndex]?.[figureCellIndex]?.color || color;

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
  }), [board, figure, offsetX, offsetY]);

  return (
    <div className={styles.container} ref={containerRef}>{boardContent}</div>
  );
};
