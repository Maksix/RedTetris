import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'

const GreenVerticalZ = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left30} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.greenShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.dark_green}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_green}`}/>
        <div className={`${styles.box} ${styles.green}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.green}`}/>
      </div>
    </div>
  )
}

export default GreenVerticalZ
