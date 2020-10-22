import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'

const YellowColumn = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left60} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.yellowShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_yellow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.yellow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_yellow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.yellow}`}/>
      </div>
    </div>
  )
}

export default YellowColumn