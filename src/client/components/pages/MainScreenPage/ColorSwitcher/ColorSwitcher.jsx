import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { switchTheme } from 'actions/themeAction';
import useComponentDidUpdate from 'hooks/useComponentDidUpdate';
import styles from './ColorSwitcher.module.less';

const ColorSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  useComponentDidUpdate(() => {
    const body = document.getElementsByTagName('body')[0];
    body.style = theme === 'dark' ? 'background-color: black; transition: 1s;' : 'background-color: #FCFFF4; transition: 1s;';
  }, [theme]);
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) dispatch(switchTheme(theme === 'dark' ? 'light' : 'dark'));
      }}
      onClick={() => dispatch(switchTheme(theme === 'dark' ? 'light' : 'dark'))}
      className={cn(styles.colorBox, styles[theme])}
    >
      <span className={cn('material-icons', styles.icon)}>
        {theme === 'dark' ? 'wb_sunny' : 'brightness_3'}
      </span>
    </div>
  );
};

export default (ColorSwitcher);
