import React, {useState} from 'react'
import {getAnimationSpeed, getAnimationDelay} from "../BackgroundScreen"
import cn from 'classnames'
import styles from '../BackgroundScreen.less'

const BlueZ = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div
      style={{'--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay()}s`}}
      className={cn(styles.boxContainer, styles.left5, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.blueShadow)}/>
        <div className={cn(styles.box, styles.blueShadow)}/>
      </div>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={cn(styles.box, styles.dark_blue)}/>
        <div className={cn(styles.box, styles.blue)}/>
      </div>
      <div className={styles.row}>
        <div className={cn(styles.box, styles.dark_blue)}/>
        <div className={cn(styles.box, styles.blue)}/>
      </div>
    </div>
  )
}

export default BlueZ