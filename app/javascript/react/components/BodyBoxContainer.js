import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import HeadTile from "./HeadTile"
import TorsoTile from "./TorsoTile"
import LegsTile from "./LegsTile"
import FootwearTile from "./FootwearTile"

const BodyBoxContainer = props => {

  return (
    <div>
    <div className="body-boxes">
      <div type="text" className="body-box">
        <HeadTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <TorsoTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <LegsTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <FootwearTile />
      </div>
    </div>
  </div>
  )
}

export default BodyBoxContainer
