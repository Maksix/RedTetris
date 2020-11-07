import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from 'helpers/helpers';
import styles from '../BackgroundScreen.less';

const OrangeG = () => {
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
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 2}s` }}
      className={cn(styles.boxContainer, styles.left70, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.orangeShadow)} />
        <div className={cn(styles.box, styles.orangeShadow)} />
        <div className={cn(styles.box, styles.orangeShadow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_orange)} />
        <div className={cn(styles.box, styles.orange)} />
        <div className={cn(styles.box, styles.dark_orange)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.orange)} />
      </div>
    </div>
  );
};

export default OrangeG;
