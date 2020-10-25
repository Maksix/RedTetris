import PropTypes from 'prop-types';
import React from "react";
import cn from 'classnames';
import styles from './MenuButton.less';

export const MenuButton = ({text, onClick, theme}) => {
  return (
    <div role={'button'} onClick={onClick} className={cn(styles.button, styles[theme])}>
      <div className={styles.text}>{text}</div>
    </div>
  );
}

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['dark', 'light'])
}

MenuButton.defaultProps = {
  onClick: () => {},
  theme: 'dark'
}
