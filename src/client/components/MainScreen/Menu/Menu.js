import React from 'react';
import cn from 'classnames';
import styles from './Menu.module.less';
import {MenuButton} from "../../common/MenuButton/MenuButton";

const Menu = () => {
  return (
    <div className={cn(styles.menuBlock)}>
      <MenuButton text={'Начать игру'}/>
      <MenuButton text={'Войти в комнату'}/>
      <MenuButton text={'Топ игроков'}/>
    </div>
  )
}

export default Menu