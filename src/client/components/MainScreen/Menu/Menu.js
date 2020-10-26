import React from 'react'
import cn from 'classnames'
import styles from './Menu.module.less'
import {useTranslation} from 'react-i18next'
import {MenuButton} from "../../common/MenuButton/MenuButton"

const Menu = () => {
  const {t} = useTranslation()

  return (
    <div className={cn(styles.menuBlock)}>
      <MenuButton text={t('main.startGame')}/>
      <MenuButton text={t('main.joinRoom')}/>
      <MenuButton text={t('main.leaderboard')}/>
    </div>
  )
}

export default Menu