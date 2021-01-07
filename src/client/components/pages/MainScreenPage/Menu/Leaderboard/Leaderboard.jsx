import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import Modal from '../../../../common/Modal/Modal';
import LeaderBoardContent from './LeaderboardContent/LeaderboardContent';

const Leaderboard = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setOpen(true)} text={t('main.leaderboard')} />
      {open && (
        <Modal
          setOpen={setOpen}
          content={<LeaderBoardContent />}
        />
      )}
    </>
  );
};

export default Leaderboard;
