import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CloseButton.module.less';

const CloseButton = ({ onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.keyCode === 13) onClick();
    }}
    className={cn(styles.buttonBox)}
  >
    <span className={cn(styles.closeSymbol)}>x</span>
  </div>
);

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
