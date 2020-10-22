import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'

const RedSquare = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left20} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={styles.redShadow}/>
        <div className={styles.redShadow}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.red}`}/>
        <div className={`${styles.box} ${styles.dark_red}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_red}`}/>
        <div className={`${styles.box} ${styles.red}`}/>
      </div>
    </div>
  )
}

export default RedSquare