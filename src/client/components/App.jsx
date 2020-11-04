import React from 'react';
import './App.less';
import io from 'socket.io-client';
import MainScreen from './MainScreen/MainScreen';

function App() {
  io('localhost:8000', {
    query: {
      message: 'hello',
    },
  });
  return (
    <>
      <MainScreen />
    </>
  );
}

export default App;
