import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather & What to Wear</h1>
        <div className="index-boxes grid-x grid-margin-x align-center large-6 medium-8 small-12">
          <div className="current_box">
            <WeatherBoxContainer />
          </div>
          <div className="hourly_box">
            <HourlyWeatherBoxContainer />
          </div>
          <div className="body_box">
            <BodyBoxContainer />
          </div>
        </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
