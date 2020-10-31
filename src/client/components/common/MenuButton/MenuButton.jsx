import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import styles from './MenuButton.less';

const MenuButton = ({ text, onClick, theme }) => (
  <div
    tabIndex={0}
    role="button"
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.keyCode === 13) onClick();
    }}
    className={cn(styles.button, styles[theme])}
  >
    <div className={styles.text}>{text}</div>
  </div>
);

MenuButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
};

MenuButton.defaultProps = {
  onClick: () => {},
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(MenuButton);
