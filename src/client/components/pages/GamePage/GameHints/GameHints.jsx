import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import styles from './GameHints.module.less';

const GameHints = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.hintContainer}>
      <div className={cn(styles.rotateFigureBlock, styles.hintBlock)}>
        <span className={styles.text}>
          {t('main.gamePage.rotateFigure')}
        </span>
        <span className={cn('material-icons', styles.text, styles.arrow)}>
          arrow_upward
        </span>
      </div>
      <div className={cn(styles.moveFigureBlock, styles.hintBlock)}>
        <span className={styles.text}>
          {t('main.gamePage.moveFigure')}
        </span>
        <span className={cn('material-icons', styles.text, styles.arrow, styles.rotateRight)}>
          arrow_downward
        </span>
        <span className={cn('material-icons', styles.text, styles.arrow)}>
          arrow_downward
        </span>
        <span className={cn('material-icons', styles.text, styles.arrow, styles.rotateLeft)}>
          arrow_downward
        </span>
      </div>
      <div className={cn(styles.moveFigureBlock, styles.hintBlock)}>
        <span className={styles.text}>
          {t('main.gamePage.dropFigure')}
        </span>
        <span className={cn('material-icons', styles.text, styles.arrow)}>
          space_bar
        </span>
      </div>
    </div>
  );
};

export default GameHints;
