import React from 'react'
import styles from './GreenVerticalZ.less'

const GreenVerticalZ = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.row}>
        <div className={styles.emptyBox} />
        <div className={styles.greenShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.emptyBox} />
        <div className={styles.darkGreenBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkGreenBox}/>
        <div className={styles.greenBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.greenBox}/>
      </div>
    </div>
  )
}

export default GreenVerticalZ