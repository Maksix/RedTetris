import { useSelector } from 'react-redux';
import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Leaderboard.module.less';

const LeaderBoardContent = ({ leaderboardData }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      {leaderboardData.map((leader, i) => (
        <div key={i} className={cn(styles.leaderRow, styles[theme])}>
          <span className={cn(styles.name)}>{leader.name}</span>
          <span className={cn(styles.score)}>{leader.score}</span>
        </div>
      ))}
    </>
  );
};

LeaderBoardContent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  leaderboardData: PropTypes.array.isRequired,
};

export default LeaderBoardContent;
