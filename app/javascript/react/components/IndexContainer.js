import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather & What to Wear</h1>
      <div id="weather_box">
        <WeatherBoxContainer/>
      </div>
      <div id="body_box">
        <BodyBoxContainer/>
      </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
