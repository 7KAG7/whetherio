import React, { useState, useEffect }  from "react"

//hook up api

//show temp scale for the day
//show conditions for the day
//show background image for >80deg day sunny
//show background image for >80deg day rainy
//show background image for 60-79deg day sunny
//show background image for 60-79deg day rainy
//show background image for 30-59deg day sunny
//show background image for 30-59deg day rainy
//show background image for <29deg day sunny
//show background image for <29deg day rainy/snowy
//8images for mvp

const WeatherBoxContainer = props => {
  const [currentWeather, setCurrentWeather] = useState ("")

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedWeather => {
      let getWeather = fetchedWeather.currently
      setCurrentWeather(getWeather)
    })
  }, [])
  return (
    <div>
      <h3 htmlFor="primary-weather grid-x medium-6" id="weather-box-title">Todays Weather:</h3>
        <div id="current-weather-box">
          <div>Current Condtions {currentWeather.summary} </div>
          <div>Temperature: {currentWeather.temperature}</div>
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
