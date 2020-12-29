import React, { useState } from 'react';
import cn from 'classnames';
import { getAnimationDelay, getAnimationSpeed } from 'helpers/helpers';
import styles from '../BackgroundScreen.less';

const PurpleLine = () => {
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
      style={{ '--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 4}s` }}
      className={cn(styles.boxContainer, styles.left85, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.purpleShadow)} />
        <div className={cn(styles.box, styles.purpleShadow)} />
        <div className={cn(styles.box, styles.purpleShadow)} />
        <div className={cn(styles.box, styles.purpleShadow)} />
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_purple)} />
        <div className={cn(styles.box, styles.purple)} />
        <div className={cn(styles.box, styles.dark_purple)} />
        <div className={cn(styles.box, styles.purple)} />
      </div>
    </div>
  );
};

export default PurpleLine;
