import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import styles from './JoinRoom.module.less';

const JoinRoom = () => {
  const theme = useSelector((state) => state.theme.theme);
  const { t } = useTranslation();
  const [roomName, setRoomName] = useState('');
  const [showButton, setShowButton] = useState(false);
  const onFocusOut = (e) => (e.target.placeholder = t('main.joinRoom'));
  const onFocus = (e) => (e.target.placeholder = t('main.joinRoomPlaceholder'));
  const onRoomNameChange = (e) => {
    setShowButton(e.target.value.length >= 5);
    if (e.target.value.length <= 5) setRoomName(e.target.value);
  };

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
          <span className={cn('material-icons', styles.joinIcon)}>
            play_arrow
          </span>
        </div>
      )}
    </div>
  );
};

export default JoinRoom;
