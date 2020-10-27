import React from 'react'
import cn from 'classnames'
import styles from './Menu.module.less'
import {useTranslation} from 'react-i18next'
import {MenuButton} from "../../common/MenuButton/MenuButton"
import Leaderboard from "./Leaderboard/Leaderboard"

const Menu = () => {
  const {t} = useTranslation()

  return (
    <div className={cn(styles.menuBlock)}>
      <MenuButton text={t('main.startGame')}/>
      <MenuButton text={t('main.joinRoom')}/>
      <Leaderboard/>
    </div>
  )
}

export default Menu
