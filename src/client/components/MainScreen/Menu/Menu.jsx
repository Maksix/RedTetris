import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import styles from './Menu.module.less';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.menuBlock)}>
      <MenuButton text={t('main.startGame')} />
      <JoinRoom />
      <Leaderboard />
    </div>
  );
};

export default Menu;
