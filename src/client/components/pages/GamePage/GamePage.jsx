import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './GamePage.less';
import { joinRoom, leaveRoom } from '../../../actions/roomActions';
import { Board } from './Board';

export const GamePage = ({ match }) => {
  const { room, name } = match.params;
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playerList.playerList);
  useEffect(() => {
    dispatch(joinRoom(name, room));
    return () => {
      dispatch(leaveRoom(name, room));
    };
  }, [room, name, dispatch]);

  return (
    <div className={cn(styles.container, styles[theme])}>
      <div className={styles.section}>
        <div className={styles.title}>
          Комната
          &nbsp;
          {room}
        </div>
        <div className={styles.title}>Игроки:</div>
        <div>
          {players.map((player) => (
            <div className={styles.text} key={player.id}>{player.name}</div>
          ))}
        </div>
      </div>
      <Board />
      <div>
        <div className={styles.title}>Очки: 1515</div>
        <div className={styles.title}>Уровень: 6</div>
        <div className={styles.text}>Следующая фигура:</div>
        <div className={styles.text}>Поворот фигуры</div>
        <div className={styles.text}>Движения</div>
      </div>
    </div>
  );
};

GamePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};
