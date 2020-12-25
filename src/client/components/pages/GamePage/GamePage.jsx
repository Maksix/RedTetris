/* eslint-disable */
import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoom, leaveRoom } from 'actions/roomActions';
import { useRouteMatch } from 'react-router-dom';
import styles from './GamePage.less';
import { Board } from './Board';
import { getNewPieces } from '../../../actions/pieceActions';
import LangSwitcher from '../../common/LangSwitcher/LangSwitcher';
import ColorSwitcher from '../../common/ColorSwitcher/ColorSwitcher';
import GameModal from './GameModal/GameModal';

export const GamePage = () => {
  const match = useRouteMatch();
  const { room, name } = match.params;

  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playerList.playerList);
  const role = useSelector((state) => state.role.role);
  const getPieces = useCallback(() => dispatch(getNewPieces(room)), [room]);

  useEffect(() => {
    dispatch(joinRoom(name, room));
    return () => {
      dispatch(leaveRoom(room));
    };
  }, [room, name, dispatch]);

  return (
    <div className={cn(styles.container, styles[theme])}>
      <div className={styles.leftSection}>
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
      <div className={styles.boardSection}>
        <Board />
      </div>
      <div className={cn(styles.optionSection)}>
        <ColorSwitcher />
        <LangSwitcher />
        {role === 'leader' && (<GameModal />)}
      </div>
      <div className={cn(styles.rightSection)}>
        <span className={styles.title}>Очки: 1515</span>
        <span className={styles.title}>Уровень: 6</span>
        <span className={styles.text}>Следующая фигура:</span>
        <span className={styles.text}>Поворот фигуры</span>
        <span className={styles.text}>Движения</span>
      </div>
    </div>
  );
};

export default GamePage;
