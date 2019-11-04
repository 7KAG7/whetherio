import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather & What to Wear</h1>
        <div className="index-boxes grid-x">
          <div className="weather-boxes large-4 medium-4 small-5">
            <div className="current_box">
              <WeatherBoxContainer />
            </div>
            <div className="hourly_box align-right">
              <HourlyWeatherBoxContainer />
            </div>
        </div>
          <div className="body-box align-center large-4 medium-4 small-2">
              <BodyBoxContainer />
          </div>
        </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
