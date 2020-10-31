/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import styles from './ColorSwitcher.module.less';
import {switchTheme} from "../../../actions/themeAction"

const ColorSwitcher = ({ theme, switchTheme }) => {
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) switchTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      onClick={() => switchTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(styles.colorBox, styles[theme])}
    >
      <span className={cn('material-icons', styles.icon)}>
        {theme === 'dark' ? 'wb_sunny' : 'brightness_3'}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theme: state.theme.theme
  }
}

const mapDispatchToProps = {
  switchTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher);
