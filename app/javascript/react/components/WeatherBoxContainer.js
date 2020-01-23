import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const WeatherBoxContainer = props => {

  return (
    <div>
      <div id="current-weather-box">
        <h2>Todays Weather for:
          <h3>{props.location}</h3>
        </h2>
        <h2>Current Condtions:
          <h3>{props.temperature}°F & {props.summary}</h3>
        </h2>
        <h2>Today:
          <h3>{props.hourlysum}</h3>
        </h2>
        <h2>This week:
          <h3>{props.future}</h3>
        </h2>
      </div>
    </div>
  )
}

export default WeatherBoxContainer
