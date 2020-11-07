import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from 'helpers/helpers';
import styles from '../BackgroundScreen.less';

const GreenVerticalZ = () => {
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
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 6}s` }}
      className={cn(styles.boxContainer, styles.left30, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.greenShadow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.dark_green)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_green)} />
        <div className={cn(styles.box, styles.green)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.green)} />
      </div>
    </div>
  );
};

export default GreenVerticalZ;
