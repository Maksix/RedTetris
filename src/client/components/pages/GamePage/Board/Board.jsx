import React from 'react';
import { useInitialFocus } from 'components/pages/GamePage/Board/useInitialFocus';
import { useBoard } from 'components/pages/GamePage/Board/useBoard';
import styles from './Board.less';

export const Board = () => {
  /* Чтобы изначально работали все клавиши несмотря ни на что */
  const containerRef = useInitialFocus();

  const board = useBoard();

  return (
    <div className={styles.container} ref={containerRef}>{board}</div>
  );
};
