import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './Leaderboard.module.less';
import CloseButton from '../../../common/CloseButton/CloseButton';
import MenuButton from '../../../common/MenuButton/MenuButton';

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
        <div className={cn(styles.modalBox)}>
          <div className={cn(styles.modalWindow)}>
            <div className={cn(styles.closeButtonBox)}>
              <CloseButton onClick={() => { setOpen(false); }} />
            </div>
            {leaderboardData.map((leader, i) => (
              <div key={i} className={cn(styles.leaderRow)}>
                <span className={cn(styles.name)}>{leader.name}</span>
                <span className={cn(styles.score)}>{leader.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Leaderboard;
