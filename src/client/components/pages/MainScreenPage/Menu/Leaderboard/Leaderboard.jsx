import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import Modal from '../../../../common/Modal/Modal';
import LeaderBoardContent from './LeaderboardRows/LeaderboardRows';

const Leaderboard = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const leaderboardData = [
    {
      name: 'jlesch',
      score: 1400,
    },
    {
      name: 'wjeyne-d',
      score: 1240,
    },
    {
      name: 'gmors-um',
      score: 1100,
    },
    {
      name: 'fmasha-h',
      score: 800,
    },
    {
      name: 'wconnel',
      score: 110,
    },
  ];

  return (
    <>
      <MenuButton onClick={() => setOpen(true)} text={t('main.leaderboard')} />
      {open && (
        <Modal
          setOpen={setOpen}
          content={<LeaderBoardContent leaderboardData={leaderboardData} />}
        />
      )}
    </>
  );
};

export default Leaderboard;
