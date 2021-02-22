import React, { useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { joinRoom, leaveRoom } from 'actions/roomActions';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getNewPieces } from 'actions/pieceActions';
import { boardInitialMock } from 'helpers/boardInitialMock';
import { BoardDummy } from 'components/pages/GamePage/Board/BoardDummy';
import styles from './GamePage.module.less';
import { Board } from './Board';
import LangSwitcher from '../../common/LangSwitcher/LangSwitcher';
import ColorSwitcher from '../../common/ColorSwitcher/ColorSwitcher';
import GameModal from './GameModal/GameModal';
import GameHints from './GameHints/GameHints';
import Modal from '../../common/Modal/Modal';
import EndGameModalContent from './EndGameModalContent/EndGameModalContent';

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

  useEffect(() => {
    dispatch(joinRoom(name, room));
    dispatch(getNewPieces(room));
    window.onbeforeunload = () => {
      dispatch(leaveRoom(room));
    };
    return () => {
      dispatch(leaveRoom(room));
    };
  }, [room, name, dispatch]);
  const gameStatus = useSelector((state) => state.game.game.status);

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
            <div className={styles.playerContainer}>
              {players.filter((player) => player.name !== name).map((player) => (
                <div className={styles.player} key={player.id}>
                  <div className={styles.name}>{player.name}</div>
                  <BoardDummy board={player.map.length ? player.map : boardInitialMock} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.boardSection}>
            {gameStatus === 'started' && <Board />}
          </div>
          <div className={cn(styles.optionSection)}>
            <ColorSwitcher />
            <LangSwitcher />
            {role === 'leader' && gameStatus !== 'started' && (<GameModal />)}
          </div>
          {gameStatus === 'finished' && <Modal content={<EndGameModalContent />} />}
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
            <span>{t('main.gamePage.nextFigure')}</span>
            <GameHints />
          </div>
        </div>
      ) : <div className={styles.loading}>loading</div>}
    </>
  );
};

export default GamePage;
