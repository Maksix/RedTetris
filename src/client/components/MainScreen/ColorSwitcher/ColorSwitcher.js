import React from 'react';
import cn from 'classnames';
import styles from './ColorSwitcher.module.less';

const ColorSwitcher = () => {
  return (
    <div className={cn(styles.colorBox)}>
      <span className={cn("material-icons", styles.icon)}>
        wb_sunny
      </span>
    </div>
  )
}

export default ColorSwitcher
