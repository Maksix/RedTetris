import React, {useState} from 'react'
import {getAnimationDelay, getAnimationSpeed} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'
import cn from "classnames"

const OrangeG = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div
      style={{'--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 2}s`}}
      className={cn(styles.boxContainer, styles.left80, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.orangeShadow)}/>
        <div className={cn(styles.box, styles.orangeShadow)}/>
        <div className={cn(styles.box, styles.orangeShadow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_orange)}/>
        <div className={cn(styles.box, styles.orange)}/>
        <div className={cn(styles.box, styles.dark_orange)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.orange)}/>
      </div>
    </div>
  )
}

export default OrangeG
