import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styles from './JoinRoom.module.less';

const JoinRoom = () => {
  const theme = useSelector((state) => state.theme.theme);
  const username = useSelector((state) => state.username.username);
  const { t } = useTranslation();
  const [roomName, setRoomName] = useState('');
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();
  const onFocusOut = (e) => (e.target.placeholder = t('main.joinRoom'));
  const onFocus = (e) => (e.target.placeholder = t('main.joinRoomPlaceholder'));
  const onRoomNameChange = (e) => {
    setShowButton(e.target.value.length >= 5);
    if (e.target.value.length <= 5) setRoomName(e.target.value);
  };
  const joinRoom = useCallback(() => {
    history.push(`/${roomName}[${username}]`);
  }, [history, username, roomName]);

  return (
    <div className={cn(styles.joinBox)}>
      <div className={cn(styles.inputBox, styles[theme])}>
        <input
          type="text"
          className={cn(styles.input, styles[theme])}
          onChange={(e) => onRoomNameChange(e)}
          value={roomName}
          placeholder={t('main.joinRoom')}
          onBlur={(e) => onFocusOut(e)}
          onFocus={(e) => onFocus(e)}
        />
      </div>
      {showButton && (
        <div className={cn(styles.joinButton, styles[theme])}>
          <button
            type="button"
            onClick={() => joinRoom()}
            className={cn('material-icons', styles.joinIcon, styles[theme])}
          >
            play_arrow
          </button>
        </div>
      )}
    </div>
  );
};

export default JoinRoom;
