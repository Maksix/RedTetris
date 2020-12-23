/* eslint-disable */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "../../../common/Modal/Modal"
import styles from "./GameModal.module.less"
import cn from "classnames"
import GameModalContent from "./GameModalContent/GameModalContent"

const GameModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.startGameBox} onClick={() => setOpen(true)}>
        <span className={cn('material-icons', styles.startGameIcon)}>
          play_arrow
        </span>
      </div>
      {open && (
        <Modal
          setOpen={setOpen}
          content={<GameModalContent/>}
        />
      )}
    </>
  );
};

export default GameModal;
