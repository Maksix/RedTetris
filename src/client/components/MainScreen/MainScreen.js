import React from 'react';
import cn from 'classnames';
import BackgroundScreen from "./BackgroundScreen/BackgroundScreen"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import styles from './MainScreen.module.less'
import ColorSwitcher from "./ColorSwitcher/ColorSwitcher"
import LangSwitcher from "./LangSwitcher/LangSwitcher"

const MainScreen = () => {
  return (
    <>
      <div className={cn(styles.mainMenu)}>
        <div className={cn(styles.logoRow)}>
          <Logo/>
          <div className={cn(styles.switcherBox)}>
            <ColorSwitcher/>
            <LangSwitcher/>
          </div>
        </div>
        <Menu/>
      </div>
      <BackgroundScreen/>
    </>
  );
}

export default MainScreen;
