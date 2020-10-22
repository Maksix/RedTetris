import React, {useState} from 'react'
import {getRandomNbr} from "../BackgroundScreen"
import styles from '../BackgroundScreen.less'

const PurpleLine = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div style={{'--duration': `${getRandomNbr()}s`}} className={`${styles.boxContainer} ${styles.left80} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.purpleShadow}`}/>
        <div className={`${styles.box} ${styles.purpleShadow}`}/>
        <div className={`${styles.box} ${styles.purpleShadow}`}/>
        <div className={`${styles.box} ${styles.purpleShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.dark_purple}`}/>
        <div className={`${styles.box} ${styles.purple}`}/>
        <div className={`${styles.box} ${styles.dark_purple}`}/>
        <div className={`${styles.box} ${styles.purple}`}/>
      </div>
    </div>
  )
}

export default PurpleLine