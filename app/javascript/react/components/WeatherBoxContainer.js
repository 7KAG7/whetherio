import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const WeatherBoxContainer = props => {

  return (
    <div>
      <div id="current-weather-box">
        <div>Todays Weather for:
          <h3>{props.location}</h3>
        </div>
        <div>Current Condtions:
          <h2>{props.temperature}°F & {props.summary}</h2>
        </div>
        <div>Today:
          <h3>{props.hourlysum}</h3>
        </div>
        <div>This week:
          <h3>{props.future}</h3>
        </div>
      </div>
    </div>
  )
}

export default WeatherBoxContainer
