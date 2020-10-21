import React from 'react'
import styles from '../BackgroundScreen.less'

const GreenVerticalZ = () => {
  console.log(styles.darkBlue)
  return (
    <div className={`${styles.boxContainer} ${styles.left30}`}>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.greenShadow}`}/>
      </div>
      <div className={styles.row}>
        <div className={styles.box} />
        <div className={`${styles.box} ${styles.darkGreen}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.darkGreen}`}/>
        <div className={`${styles.box} ${styles.green}`}/>
      </div>
      <div className={styles.row}>
        <div className={`${styles.box} ${styles.green}`}/>
      </div>
    </div>
  )
}

export default GreenVerticalZ