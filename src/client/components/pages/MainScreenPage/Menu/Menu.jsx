import React, { useCallback } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import MenuButton from 'components/common/MenuButton/MenuButton';
import { useHistory } from 'react-router-dom';
import { paths } from 'constants/paths';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Menu.module.less';
import Leaderboard from './Leaderboard/Leaderboard';
import JoinRoom from './JoinRoom/JoinRoom';
import UsernameModal from '../UsernameModal/UsernameModal';

const Menu = ({ username }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const handleStartGame = useCallback(() => history.push(paths.game), [history]);

  return (
    <div className={cn(styles.menuBlock)}>
      {username
        ? (
          <>
            <MenuButton text={t('main.startGame')} onClick={handleStartGame} />
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
