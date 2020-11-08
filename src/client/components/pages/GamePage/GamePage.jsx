import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './GamePage.less';

export const GamePage = ({ theme }) => {
  const playersContent = useMemo(() => {
    const players = ['jlesch', 'wjeyne-d', 'gmors-um'];
    return (
      players.map((player) => <div className={styles.text} key={player}>{player}</div>)
    );
  }, []);

  return (
    <div className={cn(styles.container, styles[theme])}>
      <div className={styles.section}>
        <div className={styles.title}>Комната  4</div>
        <div className={styles.title}>Игроки:</div>
        <div>{playersContent}</div>
      </div>
      <div>BOARD</div>
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
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
};
