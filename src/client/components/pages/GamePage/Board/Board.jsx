import React, { useMemo } from 'react';
import { getFilledArray } from 'helpers/getFilledArray';
import styles from './Board.less';

const rows = getFilledArray(20);
const row = getFilledArray(10).map(() => ({
  backgroundColor: 'grey',
}));
const board = rows.fill(row);

const test = [{ backgroundColor: 'red' },
  { backgroundColor: 'green' },
  { backgroundColor: 'blue' },
  { backgroundColor: 'red' },
  { backgroundColor: 'green' },
  { backgroundColor: 'blue' },
  { backgroundColor: 'red' },
  { backgroundColor: 'red' },
  { backgroundColor: 'green' },
  { backgroundColor: 'blue' }];
board[19] = test;

export const Board = () => {
  const boardContent = useMemo(() => board.map((rowItem, rowInd) => {
    const rowContent = rowItem.map(({ backgroundColor }, cellInd) => (
      <div className={styles.cell} style={{ backgroundColor }} key={cellInd} />
    ));

    return (
      <div key={rowInd}>
        <div className={styles.row}>{rowContent}</div>
      </div>
    );
  }), []);

  return (
    <div className={styles.container}>{boardContent}</div>
  );
};
