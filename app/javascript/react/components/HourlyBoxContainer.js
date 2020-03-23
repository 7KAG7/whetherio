import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const HourlyBoxContainer = props => {

  let timeStamp = new Date(props.timeStamp * 1000).toLocaleTimeString("en-US")
  let currentTimeForm = new Date(props.currentTime * 1000).toLocaleTimeString("en-US")

  return (
    <div htmlFor="primary-weather" id="weather-box-title" key={props.id}>
      <h5 className="hourlyTime">{currentTimeForm} {props.currentTemp}°F ||</h5>
      <h5 className="hourlyTime">{timeStamp} {props.temperature}°F</h5>
    </div>
  )
}

export default HourlyBoxContainer
