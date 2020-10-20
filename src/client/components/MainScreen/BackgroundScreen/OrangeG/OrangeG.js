import React from 'react'
import styles from './OrangeG.less'

const OrangeG = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.row}>
        <div className={styles.orangeShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkOrangeBox}/>
        <div className={styles.orangeBox}/>
        <div className={styles.darkOrangeBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.orangeBox}/>
      </div>
    </div>
  )
}

export default OrangeG