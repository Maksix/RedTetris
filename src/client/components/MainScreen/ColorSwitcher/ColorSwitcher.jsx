/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './ColorSwitcher.module.less';
import { switchTheme } from '../../../actions/themeAction';

const ColorSwitcher = ({ theme, switchTheme }) => (
  <div
    style={{ '--background': theme === 'dark' ? 'black' : '#FCFFF4' }}
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

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  switchTheme,
};

ColorSwitcher.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  switchTheme: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher);
