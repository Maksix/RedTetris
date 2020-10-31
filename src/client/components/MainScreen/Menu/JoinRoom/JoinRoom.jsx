import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './JoinRoom.module.less';

const JoinRoom = ({ theme }) => {
  const { t } = useTranslation();
  const [roomName, setRoomName] = useState('');
  const onFocusOut = (e) => (e.target.placeholder = t('main.joinRoom'));
  const onFocus = (e) => (e.target.placeholder = t('main.joinRoomPlaceholder'));

  return (
    <div className={cn(styles.inputBox, styles[theme])}>
      <input
        type="text"
        className={cn(styles.input, styles[theme])}
        onChange={(e) => setRoomName(e.target.value)}
        value={roomName}
        placeholder={t('main.joinRoom')}
        onBlur={(e) => onFocusOut(e)}
        onFocus={(e) => onFocus(e)}
      />
    </div>
  );
};

JoinRoom.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(JoinRoom);
