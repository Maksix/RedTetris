import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from 'actions/usernameAction';
import styles from './UsernameModal.module.less';

const UsernameModal = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const username = useSelector((state) => state.username.username);
  const { t } = useTranslation();
  const [inputUsername, setInputUsername] = useState(username);
  const [disableButton, setDisableButton] = useState(true);
  const onFocus = (e) => (e.target.placeholder = '');
  const onFocusOut = (e) => (e.target.placeholder = t('main.enterUsername'));
  const onInputChange = (e) => {
    const input = e.target.value.trim().slice(0, 12);
    setDisableButton(input.length < 4);
    setInputUsername(input);
  };

  return (
    <>
      <div className={cn(styles.inputBox, styles[theme])}>
        <input
          type="text"
          className={cn(styles.input, styles[theme])}
          onChange={(e) => onInputChange(e)}
          onFocus={(e) => onFocus(e)}
          onBlur={(e) => onFocusOut(e)}
          value={inputUsername}
          placeholder={t('main.enterUsername')}
        />
      </div>
      <button onClick={() => dispatch(setUsername(inputUsername))} type="button" disabled={disableButton} className={cn(styles.enterButton, styles[theme])}>
        <span className={cn('material-icons', styles.enterIcon)}>
          play_arrow
        </span>
      </button>
    </>
  );
};

export default UsernameModal;
