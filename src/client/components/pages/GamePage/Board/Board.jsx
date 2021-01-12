import React from 'react';
import { useInitialFocus } from 'components/pages/GamePage/Board/hooks/useInitialFocus';
import { useBoard } from 'components/pages/GamePage/Board/hooks/useBoard';
// import PropTypes from 'prop-types';
import styles from './Board.less';

export const Board = () => {
  /* Чтобы изначально работали все клавиши несмотря ни на что */
  const containerRef = useInitialFocus();

  const board = useBoard();

  return (
    <div className={styles.container} ref={containerRef}>{board}</div>
  );
};

// Board.propTypes = {
//   nextFigure: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
//   updateFigureInd: PropTypes.func.isRequired,
//   figureInd: PropTypes.number.isRequired,
// };
