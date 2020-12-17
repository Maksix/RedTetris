import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './MenuButton.less';

const MenuButton = ({ text, onClick }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
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
};

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuButton;
