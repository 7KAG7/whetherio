import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const WeatherBoxContainer = props => {

  return (
    <div>
      <div id="current-weather-box">
        <h2>Todays Weather for:
          <p>{props.location}</p>
        </h2>
        <h2>Current Condtions:
          <p>{props.temperature}°F & {props.summary}</p>
        </h2>
        <h2>Today:
          <p>{props.hourlysum}</p>
        </h2>
        <h2>This week:
          <p>{props.future}</p>
        </h2>
      </div>
    </div>
  )
}

export default WeatherBoxContainer
