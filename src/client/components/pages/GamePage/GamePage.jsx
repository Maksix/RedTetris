/* eslint-disable */
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import styles from './GamePage.less';
import { joinRoom, leaveRoom } from '../../../actions/roomActions';
import {changeMap, handleStartGame} from '../../../actions/gameActions'
import { Board } from './Board';
import { getNewPieces } from '../../../actions/pieceActions';
import LangSwitcher from '../MainScreenPage/LangSwitcher/LangSwitcher';
import ColorSwitcher from '../MainScreenPage/ColorSwitcher/ColorSwitcher';

export const GamePage = ({ match }) => {
  const { room, name } = match.params;
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.playerList.playerList);
  const options = useSelector((state) => state.game.game.options);
  const role = useSelector((state) => state.role.role);
  const startGame = useCallback(() => dispatch(handleStartGame(options, room)), [options, room]);
  const getPieces = useCallback(() => dispatch(getNewPieces(room)), [room]);
  useEffect(() => {
    dispatch(joinRoom(name, room));
    return () => {
      dispatch(leaveRoom(name, room));
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
      </div>
      <div className={cn(styles.rightSection)}>
        <span className={styles.title}>Очки: 1515</span>
        <span className={styles.title}>Уровень: 6</span>
        <span className={styles.text}>Следующая фигура:</span>
        <span className={styles.text}>Поворот фигуры</span>
        <span className={styles.text}>Движения</span>
        <div onClick={() => dispatch(changeMap(room, ['test', 'keke', name]))}>UPDATE MAP</div>
        {role === 'leader'
          && (
          <div
            className={styles.title}
            onClick={() => {
              startGame();
              getPieces();
            }}
          >
            Start game
          </div>
          )}
      </div>
    </div>
  );
};

GamePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};
