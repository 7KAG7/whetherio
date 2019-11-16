import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyWeatherBoxContainer from "./HourlyWeatherBoxContainer"
import HeadTile from "./HeadTile"
import TorsoTile from "./TorsoTile"
import LegsTile from "./LegsTile"
import FootwearTile from "./FootwearTile"

const BodyBoxContainer = props => {
<<<<<<< HEAD
=======
  const [currentBodyWeather, setCurrentBodyWeather] = useState ([])

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedBodyWeather => {
      setCurrentBodyWeather(fetchedBodyWeather.hourly.data)
    })
  }, [])

  const hourly = currentBodyWeather.map((hour) => {
    return(
      <HeadTile
        key={hour.id}
        time={hour.time}
        currently={hour.currently}
        temperature={hour.temperature}
        summary={hour.summary}
      />
    )
  })

>>>>>>> c46a46be1f05063ca75771a1ebae83dfd041ccb2

  return (
    <div>
    <div className="body-boxes">
      <div type="text" className="body-box">
        <HeadTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <TorsoTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <LegsTile />
      </div>
    </div>
    <div className="body-boxes ">
      <div type="text" className="body-box">
        <FootwearTile />
      </div>
    </div>
  </div>
  )
}

export default BodyBoxContainer
