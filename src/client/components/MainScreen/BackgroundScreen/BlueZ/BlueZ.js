import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
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
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left10} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.blueShadow}`}/>
        <div className={`${styles.box} ${styles.blueShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.dark_blue}`}/>
        <div className={`${styles.box} ${styles.blue}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_blue}`}/>
        <div className={`${styles.box} ${styles.blue}`}/>
      </div>
    </div>
  )
}

export default BlueZ