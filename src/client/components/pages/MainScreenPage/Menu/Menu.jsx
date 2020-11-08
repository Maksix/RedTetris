import React, { useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Menu.module.less';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';
import UsernameModal from '../UsernameModal/UsernameModal';
import { getRandomRoomName } from '../../../../helpers/helpers';

const Menu = ({ username }) => {
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

Menu.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.username.username,
});

export default connect(mapStateToProps)(Menu);
