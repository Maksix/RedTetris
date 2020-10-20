import React, {useState} from 'react'
import styles from './PurpleLine.less'

const PurpleLine = () => {
  const [resetAnimation, setResetAnimation] = useState(false)
  const handleResetAnimation = () => {
    setResetAnimation(true)
    setTimeout(() => {
      setResetAnimation(false)
    }, 0)
  }
  return (
    <div className={`${styles.boxContainer} ${resetAnimation ? styles.resetAnimation : ''}`} onClick={handleResetAnimation}>
      <div className={styles.row}>
        <div className={styles.purpleShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkPurpleBox}/>
        <div className={styles.purpleBox}/>
        <div className={styles.darkPurpleBox}/>
        <div className={styles.purpleBox}/>
      </div>
    </div>
  )
}

export default PurpleLine