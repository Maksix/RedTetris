import React from 'react'
import styles from './BlueZ.less'

const BlueZ = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.row}>
        <div className={styles.emptyBox} />
        <div className={styles.blueShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.emptyBox} />
        <div className={styles.darkBlueBox}/>
        <div className={styles.blueBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkBlueBox}/>
        <div className={styles.blueBox}/>
      </div>
    </div>
  )
}

export default BlueZ