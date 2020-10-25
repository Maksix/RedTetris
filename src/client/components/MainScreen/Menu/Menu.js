import React from 'react';
import cn from 'classnames';
import styles from './Menu.module.less';

const Menu = () => {
  return (
    <div className={cn(styles.menuBlock)}>
      <div>Начать игру</div>
      <div>Настройки</div>
      <div>Топ игроков</div>
    </div>
  )
}

export default Menu