import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const HourlyBoxContainer = props => {

  let timeStamp = new Date(props.timeStampZero * 1000).toLocaleTimeString("en-US")
  let timeStampOne = new Date(props.timeStampOne * 1000).toLocaleTimeString("en-US")
  let timeStampTwo = new Date(props.timeStampTwo * 1000).toLocaleTimeString("en-US")
  let timeStampThree = new Date(props.timeStampThree * 1000).toLocaleTimeString("en-US")
  let timeStampFour = new Date(props.timeStampFour * 1000).toLocaleTimeString("en-US")
  let timeStampFive = new Date(props.timeStampFive * 1000).toLocaleTimeString("en-US")
  let timeStampSix = new Date(props.timeStampSix * 1000).toLocaleTimeString("en-US")


  return (
    <div htmlFor="primary-weather" id="weather-box-title">
      <h5 className="hourlyTime" keyZero={props.id}>{timeStamp} {props.temperatureZero}°F || </h5>
      <h5 className="hourlyTime" keyOne={props.id}>{timeStampOne} {props.temperatureOne}°F || </h5>
      <h5 className="hourlyTime" keyTwo={props.id}>{timeStampTwo} {props.temperatureTwo}°F || </h5>
      <h5 className="hourlyTime" keyThree={props.id}>{timeStampThree} {props.temperatureThree}°F || </h5>
      <h5 className="hourlyTime" keyFour={props.id}>{timeStampFour} {props.temperatureFour}°F || </h5>
      <h5 className="hourlyTime" keyFive={props.id}>{timeStampFive} {props.temperatureFive}°F || </h5>
      <h5 className="hourlyTime" keySix={props.id}>{timeStampSix} {props.temperatureSix}°F</h5>
    </div>
  )
}

export default HourlyBoxContainer
