import React from 'react';
import RedSquare from "./RedSquare/RedSquare"
import BlueZ from "./BlueZ/BlueZ"
import YellowColumn from "./YellowColumn/YellowColumn"
import GreenVerticalZ from "./GreenVerticalZ/GreenVerticalZ"
import OrangeG from "./OrangeG/OrangeG"
import PurpleLine from "./PurpleLine/PurpleLine"

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