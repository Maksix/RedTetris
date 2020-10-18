import React from 'react';
import styles from './MainScreen.module.css';

const MainScreen = () => {
  return (
    <div>
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
    </div>
  );
}

export default MainScreen;
