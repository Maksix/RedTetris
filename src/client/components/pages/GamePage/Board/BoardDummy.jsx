import React from 'react';
import { useDrawBoard } from 'components/pages/GamePage/Board/hooks/useDrawBoard';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Board.less';

export const BoardDummy = ({ board }) => {
  const content = useDrawBoard({ isDummy: true, board });

  return <div className={cn(styles.container, styles.dummy)}>{content}</div>;
};

BoardDummy.propTypes = {
  board: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
