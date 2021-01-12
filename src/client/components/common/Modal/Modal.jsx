import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Modal.module.less';
import CloseButton from '../CloseButton/CloseButton';

const Modal = ({ content, setOpen }) => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <>
      <div className={styles.layer} />
      <div className={cn(styles.modalBox, styles[theme])}>
        <div className={cn(styles.modalWindow, styles[theme])}>
          <div className={cn(styles.closeButtonBox)}>
            <CloseButton onClick={() => setOpen(false)} />
          </div>
          {content}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
};

export default Modal;
