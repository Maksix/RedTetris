import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';
import styles from './EndGameModalContent.module.less';

const EndGameModalContent = () => {
  const { t } = useTranslation();
  const score = useSelector((state) => state.game.game.score);
  const theme = useSelector((state) => state.theme.theme);
  const history = useHistory();

  const joinRoom = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <div className={styles.content}>
      <span className={styles.contentTitle}>{t('main.gamePage.modal.endGameTitle')}</span>
      <span className={styles.endGameText}>
        {t('main.gamePage.modal.endGameTextPt1')}
        {score}
        {t('main.gamePage.modal.endGameTextPt2')}
      </span>
      <div
        role="button"
        tabIndex={0}
        onClick={joinRoom}
        className={cn(styles.endGame, styles[theme])}
      >
        <span className={cn(styles.buttonText, styles[theme])}>{t('main.gamePage.modal.endGameButton')}</span>
      </div>
    </div>
  );
};

export default EndGameModalContent;
