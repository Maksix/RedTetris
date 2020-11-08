import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { switchTheme } from 'actions/themeAction';
import useComponentDidUpdate from 'hooks/useComponentDidUpdate';
import styles from './ColorSwitcher.module.less';

const ColorSwitcher = ({ theme, switchThemeAction }) => {
  useComponentDidUpdate(() => {
    const body = document.getElementsByTagName('body')[0];
    body.style = theme === 'dark' ? 'background-color: black; transition: 1s;' : 'background-color: #FCFFF4; transition: 1s;';
  }, [theme]);
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) switchThemeAction(theme === 'dark' ? 'light' : 'dark');
      }}
      onClick={() => switchThemeAction(theme === 'dark' ? 'light' : 'dark')}
      className={cn(styles.colorBox, styles[theme])}
    >
      <span className={cn('material-icons', styles.icon)}>
        {theme === 'dark' ? 'wb_sunny' : 'brightness_3'}
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = {
  switchThemeAction: switchTheme,
};

ColorSwitcher.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  switchThemeAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSwitcher);
