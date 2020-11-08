import React, { useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUsername } from 'actions/usernameAction';
import styles from './UsernameModal.module.less';

const UsernameModal = ({ theme, username, setUsernameAction }) => {
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
    <div className={cn(styles.modalWindow, styles[theme])}>
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
      <button onClick={() => setUsernameAction(inputUsername)} type="button" disabled={disableButton} className={cn(styles.enterButton, styles[theme])}>
        <span className={cn('material-icons', styles.enterIcon)}>
          play_arrow
        </span>
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  setUsernameAction: setUsername,
};

UsernameModal.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
  username: PropTypes.string.isRequired,
  setUsernameAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  username: state.username.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsernameModal);
