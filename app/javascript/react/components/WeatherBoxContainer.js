import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const WeatherBoxContainer = props => {

  return (
    <div>
      <h3 htmlFor="primary-weather grid-x medium-6" id="weather-box-title">Todays Weather:</h3>

        <div id="current-weather-box">
          <h3>Current Condtions: <h2>{props.temperature}°F & {props.summary}</h2></h3>
          <div>Humidity: {props.humidity}</div>
          <div>Chance of Rain: {props.precipProbability}%</div>
          <div>upcoming: {props.future}</div>
        </div>
    </div>
  )
}

export default WeatherBoxContainer
