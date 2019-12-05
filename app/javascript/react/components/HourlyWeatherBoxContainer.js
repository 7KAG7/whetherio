import React, { useState, useEffect }  from "react"
import HourlyTile from "./HourlyTile"

const HourlyWeatherBoxContainer = props => {
  const [currentHourlyWeather, setCurrentHourlyWeather] = useState ([])

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(body => {
      setCurrentHourlyWeather(body.weather.hourly.data)
    })
  }, [])

  const hourly = currentHourlyWeather.map((hour) => {
    return(
      <HourlyTile
        key={hour.id}
        time={hour.time}
        currently={hour.currently}
        temperature={hour.temperature}
        summary={hour.summary}
      />
    )
  })

  return (
    <div>
      <h3 htmlFor="primary-weather" id="weather-box-title">Hourly Conditions:</h3>
        <div id="hourly-weather-box">
          {hourly}
        </div>
    </div>
  )
}

export default HourlyWeatherBoxContainer
