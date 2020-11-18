import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CloseButton from 'components/common/CloseButton/CloseButton';
import MenuButton from 'components/common/MenuButton/MenuButton';
import styles from './Leaderboard.module.less';

const Leaderboard = () => {
  const theme = useSelector((state) => state.theme.theme);
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
        <div className={cn(styles.modalBox, styles[theme])}>
          <div className={cn(styles.modalWindow, styles[theme])}>
            <div className={cn(styles.closeButtonBox)}>
              <CloseButton onClick={() => setOpen(false)} />
            </div>
            {leaderboardData.map((leader, i) => (
              <div key={i} className={cn(styles.leaderRow, styles[theme])}>
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
