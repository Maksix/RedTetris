import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './LangSwitcher.module.less';

const LangSwitcher = ({ theme }) => {
  const { t, i18n } = useTranslation();
  const changeLang = () => i18n.changeLanguage(i18n.language === 'ru-RU' ? 'en-US' : 'ru-RU');
  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.keyCode === 13) changeLang();
      }}
      className={cn(styles.switcherBox, styles[theme])}
      onClick={changeLang}
    >
      <span className={cn(styles.text)}>{t('lang')}</span>
    </div>
  );
};

LangSwitcher.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']).isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(LangSwitcher);
