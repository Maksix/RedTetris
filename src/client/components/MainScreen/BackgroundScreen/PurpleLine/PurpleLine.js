import React, {useState} from 'react'
import {getAnimationDelay, getAnimationSpeed} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'
import cn from "classnames"

const PurpleLine = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div
      style={{'--duration': `${getAnimationSpeed()}s`, '--delay': `${getAnimationDelay() + 4}s`}}
      className={cn(styles.boxContainer, styles.left90, resetAnimation ? styles.resetAnimation : '')}
      onClick={handleResetAnimation}
    >
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.purpleShadow)}/>
        <div className={cn(styles.box, styles.purpleShadow)}/>
        <div className={cn(styles.box, styles.purpleShadow)}/>
        <div className={cn(styles.box, styles.purpleShadow)}/>
      </div>
      <div className={cn(styles.row)}>
        <div className={cn(styles.box, styles.dark_purple)}/>
        <div className={cn(styles.box, styles.purple)}/>
        <div className={cn(styles.box, styles.dark_purple)}/>
        <div className={cn(styles.box, styles.purple)}/>
      </div>
    </div>
  )
}

export default PurpleLine
