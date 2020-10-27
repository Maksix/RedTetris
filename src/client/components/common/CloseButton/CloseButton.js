import React from 'react'
import cn from 'classnames'
import styles from './CloseButton.module.less'

const CloseButton = ({onClick}) => (
  <div onClick={onClick} className={cn(styles.buttonBox)}>
    <span className={cn(styles.closeSymbol)}>x</span>
  </div>
)

export default CloseButton
