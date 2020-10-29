import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from '../../../../helpers/helpers';
import styles from '../BackgroundScreen.less';

const BlueZ = () => {
  const [resetAnimation, setResetAnimation] = useState(false);
  const handleResetAnimation = () => {
    setResetAnimation(true);
    setTimeout(() => {
      setResetAnimation(false);
    }, 0);
  };
  return (
    <div
      tabIndex={-1}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) handleResetAnimation();
      }}
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 4}s` }}
      className={cn(styles.boxContainer, styles.left5, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.blueShadow)} />
        <div className={cn(styles.box, styles.blueShadow)} />
      </div>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={cn(styles.box, styles.dark_blue)} />
        <div className={cn(styles.box, styles.blue)} />
      </div>
      <div className={styles.row}>
        <div className={cn(styles.box, styles.dark_blue)} />
        <div className={cn(styles.box, styles.blue)} />
      </div>
    </div>
  );
};

export default BlueZ;
