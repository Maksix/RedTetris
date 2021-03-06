import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './LangSwitcher.module.less';

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const theme = useSelector((state) => state.theme.theme);
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

export default LangSwitcher;
