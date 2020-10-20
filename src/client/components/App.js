import React from 'react';
import {Button} from "./Button";
import './App.less'
import MainScreen from "./MainScreen/MainScreen"

function App() {
  return (
    <div>
      <MainScreen/>
      <Button onClick={()=>console.log('here')} text="Начать игру"/>
      <Button onClick={()=>console.log('here')} theme="light" text="Начать игру"/>
    </div>
  );
}

export default App;
