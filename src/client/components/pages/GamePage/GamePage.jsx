/* eslint-disable */
import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoom, leaveRoom } from 'actions/roomActions';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './GamePage.less';
import { Board } from './Board';
import { getNewPieces } from '../../../actions/pieceActions';
import LangSwitcher from '../../common/LangSwitcher/LangSwitcher';
import ColorSwitcher from '../../common/ColorSwitcher/ColorSwitcher';
import GameModal from './GameModal/GameModal';

export const GamePage = () => {
  const match = useRouteMatch();
  const { room, name } = match.params;
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const roomError = useSelector((state) => state.room.roomError);
  const players = useSelector((state) => state.playerList.playerList);
  const role = useSelector((state) => state.role.role);
  const score = useSelector((state) => state.game.game.score);
  const getPieces = useCallback(() => dispatch(getNewPieces(room)), [room]);

  useEffect(() => {
    dispatch(joinRoom(name, room));
    return () => {
      dispatch(leaveRoom(room));
    };
  }, [room, name, dispatch]);

  if (roomError) {
    return (
      <div className={cn(styles.errorContainer, styles[theme])}>
        <span className={cn(styles.error, styles[theme])}>
          {t('main.gamePage.roomError')}
        </span>
      </div>
    );
  }

  return (
    <>
      {players.length > 0 ? (
        <div className={cn(styles.container, styles[theme])}>
          <div className={styles.leftSection}>
            <div className={styles.title}>
              {t('main.gamePage.room')}
              &nbsp;
              {room}
            </div>
            <div className={styles.title}>{t('main.gamePage.players')}</div>
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
            <span className={styles.title}>
              {t('main.gamePage.score')}
              {' '}
              {score}
            </span>
            <span className={styles.title}>
              {t('main.gamePage.level')}
              {' '}
              6
            </span>
            <span className={styles.text}>{t('main.gamePage.nextFigure')}</span>
            <span className={styles.text}>{t('main.gamePage.rotateFigure')}</span>
            <span className={styles.text}>{t('main.gamePage.moveFigure')}</span>
          </div>
        </div>
      ) : <div className={styles.loading}>loading</div>}
    </>
  );
};

export default GamePage;
