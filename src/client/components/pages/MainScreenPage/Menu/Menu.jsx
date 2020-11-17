import React, { useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRandomRoomName } from 'helpers/helpers';
import styles from './Menu.module.less';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';
import UsernameModal from '../UsernameModal/UsernameModal';

const Menu = () => {
  const username = useSelector((state) => state.username.username);
  const { t } = useTranslation();
  const history = useHistory();
  const handleStartGame = useCallback(() => {
    const roomName = getRandomRoomName();
    history.push(`/${roomName}[${username}]`);
  }, [history, username]);

  return (
    <>
      {username
        ? (
          <div className={cn(styles.menuBlock)}>
            <MenuButton text={t('main.startGame')} onClick={handleStartGame} />
            <JoinRoom />
            <Leaderboard />
          </div>
        ) : <UsernameModal /> }
    </>
  );
};

export default Menu;
