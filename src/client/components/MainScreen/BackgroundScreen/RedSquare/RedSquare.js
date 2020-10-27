import React, {useState} from 'react'
import {getAnimationDelay, getAnimationSpeed} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'
import cn from "classnames"

const RedSquare = () => {
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
      className={cn(styles.boxContainer, styles.left20, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.redShadow)}/>
        <div className={cn(styles.redShadow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.red)}/>
        <div className={cn(styles.box, styles.dark_red)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_red)}/>
        <div className={cn(styles.box, styles.red)}/>
      </div>
    </div>
  )
}

export default RedSquare
