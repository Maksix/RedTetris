import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './GameModal.module.less';

const GameModal = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={cn(styles.modalBox, styles[theme])}>

    </div>
  );
};

export default GameModal;
