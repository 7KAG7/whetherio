import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather & What to Wear</h1>
        <div className="index-boxes grid-x grid-margin-x">
          <div className="current_box large-5 medium-5 small-2">
            <WeatherBoxContainer />
          </div>
          <div className="hourly_box align-right large-5 medium-5 small-2">
            <HourlyWeatherBoxContainer />
          </div>
          <div className="body_box align-center large-2 medium-2 small-2">
            <BodyBoxContainer />
          </div>
        </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
