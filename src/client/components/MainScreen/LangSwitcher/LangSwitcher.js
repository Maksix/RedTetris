import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import styles from './LangSwitcher.module.less'

const LangSwitcher = () => {
  const {t, i18n} = useTranslation()
  const changeLang = () => i18n.changeLanguage(i18n.language === 'ru-RU' ? 'en-US' : 'ru-RU')
  return (
    <div className={cn(styles.switcherBox)} onClick={changeLang}>
      {t('lang')}
    </div>
  )
}

export default LangSwitcher
