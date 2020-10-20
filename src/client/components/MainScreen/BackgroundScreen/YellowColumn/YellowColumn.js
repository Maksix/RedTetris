import React from 'react'
import styles from './YellowColumn.less'

const YellowColumn = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.row}>
        <div className={styles.yellowShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.yellowBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkYellowBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.yellowBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkYellowBox}/>
      </div>
    </div>
  )
}

export default YellowColumn