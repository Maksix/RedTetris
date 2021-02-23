import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { handleStartGame } from 'actions/gameActions';
import styles from './GameModalContent.module.less';

const GameModalContent = ({ setOpen }) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { t } = useTranslation();
  const { room } = match.params;
  const theme = useSelector((state) => state.theme.theme);
  const speedInitial = useSelector((state) => state.game.game.options.speed);
  const [speed, setSpeed] = useState(speedInitial);
  const handleSpeedUp = useCallback(() => setSpeed(
    (prevSpeed) => (prevSpeed >= 9 ? prevSpeed : prevSpeed + 1),
  ), []);
  const handleSpeedDown = useCallback(() => setSpeed(
    (prevSpeed) => (prevSpeed <= 1 ? prevSpeed : prevSpeed - 1),
  ), []);
  const startGame = useCallback(() => {
    dispatch(handleStartGame({ speed }, room));
    setOpen(false);
  },
  [speed, room, dispatch, setOpen]);

  return (
    <div className={styles.content}>
      <span className={styles.contentTitle}>{t('main.gamePage.modal.gameOptions')}</span>
      <span className={styles.speedTitle}>{t('main.gamePage.modal.speed')}</span>
      <div className={styles.contentBody}>
        <div className={styles.speedOption}>
          <div
            className={cn(styles.arrowBox, styles[theme])}
            role="button"
            tabIndex={0}
            onClick={handleSpeedUp}
          >
            <span className={cn(styles.arrow, styles.arrowUp, 'material-icons')}>
              arrow_drop_up
            </span>
          </div>
          <span className={styles.speed}>{speed}</span>
          <div
            className={cn(styles.arrowBox, styles[theme])}
            role="button"
            tabIndex={0}
            onClick={handleSpeedDown}
          >
            <span className={cn(styles.arrow, styles.arrowDown, 'material-icons')}>
              arrow_drop_down
            </span>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={startGame}
          className={cn(styles.startGame, styles[theme])}
        >
          <span className={cn(styles.buttonText, styles[theme])}>{t('main.gamePage.modal.startGame')}</span>
        </div>
      </div>
    </div>
  );
};

GameModalContent.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default GameModalContent;
