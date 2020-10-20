import React from 'react'
import styles from './PurpleLine.less'

const PurpleLine = () => {
  return (
    <div className={styles.boxContainer}>
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