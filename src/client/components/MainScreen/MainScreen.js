import React from 'react';
import cn from 'classnames';
import BackgroundScreen from "./BackgroundScreen/BackgroundScreen"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import styles from './MainScreen.module.less'

const MainScreen = () => {
  return (
    <>
      <div className={cn(styles.mainMenu)}>
        <Logo/>
        <Menu/>
      </div>
      <BackgroundScreen/>
    </>
  );
}

export default MainScreen;
