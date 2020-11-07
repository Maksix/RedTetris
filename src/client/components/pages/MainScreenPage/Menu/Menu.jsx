import React, { useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import { useHistory } from 'react-router-dom';
import { paths } from 'constants/paths';
import styles from './Menu.module.less';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';

const Menu = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const handleStartGame = useCallback(() => history.push(paths.game), [history]);

  return (
    <div className={cn(styles.menuBlock)}>
      <MenuButton text={t('main.startGame')} onClick={handleStartGame} />
      <JoinRoom />
      <Leaderboard />
    </div>
  );
};

export default Menu;
