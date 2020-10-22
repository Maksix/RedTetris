import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'

const OrangeG = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left70} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.orangeShadow}`}/>
        <div className={`${styles.box} ${styles.orangeShadow}`}/>
        <div className={`${styles.box} ${styles.orangeShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_orange}`}/>
        <div className={`${styles.box} ${styles.orange}`}/>
        <div className={`${styles.box} ${styles.dark_orange}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.orange}`}/>
      </div>
    </div>
  )
}

export default OrangeG