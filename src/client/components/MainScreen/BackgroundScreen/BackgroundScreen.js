import React from 'react';
import RedSquare from "./RedSquare/RedSquare"
import BlueZ from "./BlueZ/BlueZ"
import YellowColumn from "./YellowColumn/YellowColumn"
import GreenVerticalZ from "./GreenVerticalZ/GreenVerticalZ"
import OrangeG from "./OrangeG/OrangeG"
import PurpleLine from "./PurpleLine/PurpleLine"

export const getAnimationSpeed = () => Math.floor(Math.random() * 3) + 6;
export const getAnimationDelay = () => Math.floor(Math.random() * 3) + 2;

const BackgroundScreen = () => {
  return (
    <>
      <RedSquare/>
      <BlueZ/>
      <YellowColumn/>
      <GreenVerticalZ/>
      <OrangeG/>
      <PurpleLine/>
    </>
  )
}

export default BackgroundScreen