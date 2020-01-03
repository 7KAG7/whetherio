import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'
import SearchBarComponent from './SearchBarComponent'

const IndexContainer = props => {
  const [currentWeather, setCurrentWeather] = useState ("")
  const [currentDailyWeather, setCurrentDailyWeather] = useState ("")
  const [user, setUser] = useState (null)

  const getWeather = (location) => {
    let payload = JSON.stringify(location)
    fetch(`api/v1/weathers/?location=${payload}`)
    .then(response => {
      return response.json()
    })
    .then(body => {
      if (body.user) {
       setUser(body.user)
      }
      setCurrentWeather(body.weather.currently)
      setCurrentDailyWeather(body.weather.daily)
    })
  }

  return (
    <div>
      <div className="city_box">
      <SearchBarComponent
        getWeather={getWeather}
      />
      </div>
      <div className="index-boxes grid-x grid-margin-x align-center large-6 medium-8 small-12">
        <div className="current_box">
          <WeatherBoxContainer
          key={currentWeather.id}
          summary={currentWeather.summary}
          temperature={currentWeather.temperature}
          humidity={currentWeather.humidity}
          precipProbability={currentWeather.precipProbability}
          future={currentDailyWeather.summary}
          />
        </div>
        <div className="body_box">
          <BodyBoxContainer
          key={currentWeather.id}
          summary={currentWeather.summary}
          temperature={currentWeather.temperature}
          user={user}
          />
        </div>
      </div>
      <h6 id="dark_sky">https://darksky.net/poweredby/</h6>
    </div>
  )
}

export default IndexContainer
