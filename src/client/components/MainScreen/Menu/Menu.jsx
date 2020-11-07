import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Menu.module.less';
import MenuButton from '../../common/MenuButton/MenuButton';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';
import UsernameModal from '../UsernameModal/UsernameModal';

const Menu = ({ username }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.menuBlock)}>
      {username
        ? (
          <>
            <MenuButton text={t('main.startGame')} />
            <JoinRoom />
            <Leaderboard />
          </>
        ) : <UsernameModal /> }
    </div>
  );
};

Menu.propTypes = {
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  username: state.username.username,
});

export default connect(mapStateToProps)(Menu);
