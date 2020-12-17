import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from 'helpers/helpers';
import styles from '../BackgroundScreen.less';

const RedSquare = () => {
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
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 2}s` }}
      className={cn(styles.boxContainer, styles.left20, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.redShadow)} />
        <div className={cn(styles.redShadow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.red)} />
        <div className={cn(styles.box, styles.dark_red)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_red)} />
        <div className={cn(styles.box, styles.red)} />
      </div>
    </div>
  );
};

export default RedSquare;
