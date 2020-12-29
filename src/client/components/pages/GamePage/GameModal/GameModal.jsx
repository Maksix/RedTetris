/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import Modal from '../../../common/Modal/Modal';
import styles from './GameModal.module.less';
import GameModalContent from './GameModalContent/GameModalContent';

const GameModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={cn(styles.startGameBox, styles[theme])}
        onClick={() => setOpen(true)}
      >
        <span className={cn('material-icons', styles.startGameIcon)}>
          play_arrow
        </span>
      </div>
      {open && (
        <Modal
          setOpen={setOpen}
          content={<GameModalContent setOpen={setOpen} />}
        />
      )}
    </>
  );
};

export default GameModal;
