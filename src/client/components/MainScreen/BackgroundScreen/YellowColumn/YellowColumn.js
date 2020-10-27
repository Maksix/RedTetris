import React, {useState} from 'react'
import {getAnimationDelay, getAnimationSpeed} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'
import cn from "classnames"

const YellowColumn = () => {
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
      className={cn(styles.boxContainer, styles.left60, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellowShadow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_yellow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_yellow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.yellow)}/>
      </div>
    </div>
  )
}

export default YellowColumn
