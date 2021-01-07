import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import React, { useEffect } from 'react';
import styles from '../Leaderboard.module.less';
import { sendGetLeaderboard } from '../../../../../../actions/leaderboardActions';

const LeaderboardContent = () => {
  const theme = useSelector((state) => state.theme.theme);
  const leaderboard = useSelector((state) => state.leaderboard.leaderboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendGetLeaderboard());
  });

  return (
    <>
      {leaderboard.map((leader, i) => (
        <div key={i} className={cn(styles.leaderRow, styles[theme])}>
          <span className={cn(styles.name)}>{leader.name}</span>
          <span className={cn(styles.score)}>{leader.score}</span>
        </div>
      ))}
    </>
  );
};

export default LeaderboardContent;
