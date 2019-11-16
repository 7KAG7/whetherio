import React, { useState, useEffect }  from "react"

const WeatherBoxContainer = props => {
  const [currentWeather, setCurrentWeather] = useState ("")
  const [currentDailyWeather, setCurrentDailyWeather] = useState ("")

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedWeather => {
      setCurrentWeather(fetchedWeather.currently)
    })
  }, [])

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedDailyWeather => {
      setCurrentDailyWeather(fetchedDailyWeather.daily)
    })
  }, [])

  return (
    <div>
      <h3 htmlFor="primary-weather grid-x medium-6" id="weather-box-title">Todays Weather:</h3>
        <div id="current-weather-box">
          <div>Current Condtions: {currentWeather.summary}</div>
          <div>Todays Condtions: {currentDailyWeather.summary}</div>
          <div>Temperature: {currentWeather.temperature}°F</div>
          <div>Humidity: {currentWeather.humidity}</div>
          <div>Windspeed: {currentWeather.windSpeed}</div>
          <div>Wind Gusts: {currentWeather.windGust}</div>
          <div>Cloud Cover: {currentWeather.cloudCover}</div>
          <div>Chance of Rain: {currentWeather.precipProbability}</div>
          <div>Dewpoint: {currentWeather.dewPoint}</div>
          <div>UV Index: {currentWeather.uvIndex}</div>
        </div>
    </div>
  )
}

export default WeatherBoxContainer
