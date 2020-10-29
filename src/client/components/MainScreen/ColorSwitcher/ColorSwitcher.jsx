/* eslint-disable */
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ColorSwitcher.module.less';

const ColorSwitcher = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) setTheme(theme => theme === 'dark' ? 'light' : 'dark');
      }}
      onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')}
      className={cn(styles.colorBox, styles[theme])}
    >
      <span className={cn('material-icons', styles.icon)}>
        {theme === 'dark' ? 'wb_sunny' : 'brightness_3'}
      </span>
    </div>
  );
};

export default ColorSwitcher;
