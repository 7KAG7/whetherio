import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import HeadTile from "./HeadTile"
import TorsoTile from "./TorsoTile"
import LegsTile from "./LegsTile"
import FootwearTile from "./FootwearTile"


const BodyBoxContainer = props => {
  const [currentHourlyBody, setCurrentHourlyBody] = useState ([])

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(hourlyWeather => {
      setCurrentHourlyBody(hourlyWeather.hourly.data)
      debugger
    })
  }, [])

  const hourlyHead = currentHourlyBody.map((body) => {
    return(
      <HeadTile
        key={body.id}
        temperature={body.temperature}
        summary={body.summary}
      />
    )
  })

  return (
    <div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box">
        <HeadTile />
      </div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box">
        <TorsoTile />
      </div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box">
        <LegsTile />
      </div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box">
        <FootwearTile />
      </div>
    </div>
  </div>
  )
}

export default BodyBoxContainer
