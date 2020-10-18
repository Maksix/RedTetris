import React from 'react';
import {Button} from "./Button";
import styles from './App.less'
import './App.module.css';
import MainScreen from "./MainScreen/MainScreen"

function App() {
  return (
    <div className={styles.App}>
      <MainScreen/>
      <Button onClick={()=>console.log('here')} text="Начать игру"/>
      <Button onClick={()=>console.log('here')} theme="light" text="Начать игру"/>
    </div>
  );
}

export default App;
