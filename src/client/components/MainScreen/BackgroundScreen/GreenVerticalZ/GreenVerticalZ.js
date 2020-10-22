import React from 'react'
import styles from '../BackgroundScreen.less'

const GreenVerticalZ = () => {
  return (
    <div className={`${styles.boxContainer} ${styles.left30}`}>
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
