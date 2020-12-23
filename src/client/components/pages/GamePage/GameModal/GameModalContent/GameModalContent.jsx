import React, { useCallback, useState } from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './GameModalContent.module.less';

const GameModalContent = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [speed, setSpeed] = useState(5);
  const handleSpeedUp = useCallback(() => setSpeed((prevSpeed) => prevSpeed + 1));
  const handleSpeedDown = useCallback(() => setSpeed((prevSpeed) => prevSpeed - 1));
  return (
    <div className={styles.content}>
      <span className={styles.contentTitle}>Game options</span>
      <span className={styles.speedTitle}>Speed</span>
      <div className={styles.contentBody}>
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
    </div>
  );
};

export default GameModalContent;
