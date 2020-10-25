import React, {useState} from 'react'
import {getAnimationDelay, getAnimationSpeed} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'
import cn from "classnames"

const GreenVerticalZ = () => {
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
      className={cn(styles.boxContainer, styles.left30, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.greenShadow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box)} />
        <div className={cn(styles.box, styles.dark_green)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_green)}/>
        <div className={cn(styles.box, styles.green)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.green)}/>
      </div>
    </div>
  )
}

export default GreenVerticalZ
