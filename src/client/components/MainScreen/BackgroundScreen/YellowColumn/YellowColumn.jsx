import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from '../../../../helpers/helpers';
import styles from '../BackgroundScreen.less';

const YellowColumn = () => {
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
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay()}s` }}
      className={cn(styles.boxContainer, styles.left60, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellowShadow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_yellow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_yellow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellow)} />
      </div>
    </div>
  );
};

export default YellowColumn;
