import React from 'react';
import {Button} from "./Button";
import styles from './App.less'

function App() {
  return (
    <div className={styles.App}>
      <Button onClick={()=>console.log('here')} text="Начать игру"/>
      <Button onClick={()=>console.log('here')} theme="light" text="Начать игру"/>
    </div>
  );
}

export default App;
