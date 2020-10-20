import React from 'react'
import styles from './RedSquare.less'

const RedSquare = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.row}>
        <div className={styles.redShadow}/>
      </div>
      <div className={styles.row}>
        <div className={styles.redBox}/>
        <div className={styles.darkRedBox}/>
      </div>
      <div className={styles.row}>
        <div className={styles.darkRedBox}/>
        <div className={styles.redBox}/>
      </div>
    </div>
  )
}

export default RedSquare