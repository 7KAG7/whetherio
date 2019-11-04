import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather & What to Wear</h1>
        <div className="index-boxes grid-x">
          <div className="weather-boxes large-6 medium-8 small-6">
            <div className="current_box">
              <WeatherBoxContainer />
            <div className="hourly_box">
              <HourlyWeatherBoxContainer />
            </div>
          </div>
        </div>
          <div className="body-box align-center large-4 medium-4 small-6">
              <BodyBoxContainer />
          </div>
        </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
