import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'
import SearchBarComponent from './SearchBarComponent'
import BackgroundContainer from './BackgroundContainer'


const IndexContainer = props => {
  const [currentWeather, setCurrentWeather] = useState ("")
  const [currentLocation, setCurrentLocation] = useState ("")
  const [currentDailyWeather, setCurrentDailyWeather] = useState ("")
  const [user, setUser] = useState (null)

  useEffect(() => {
    fetch(`api/v1/weathers`)
      .then(response => {
        if (response.ok) {
        return response.json()
      }else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
      })
      .then(body => {
        if (body.user) {
         setUser(body.user)
        }
        setCurrentWeather(body.weather.currently)
        setCurrentDailyWeather(body.weather.daily)
        setCurrentLocation(body.results[0].data.formatted_address)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }, [])

  const getWeather = (location) => {
    let payload = JSON.stringify(location)
    fetch(`api/v1/weathers/?location=${payload}`)
    .then(response => {
      if (response.ok) {
      return response.json()
    }else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error);
    }
    })
    .then(body => {
      if (body.user) {
       setUser(body.user)
      }
      setCurrentWeather(body.weather.currently)
      setCurrentDailyWeather(body.weather.daily)
      setCurrentLocation(body.results[0].data.formatted_address)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  return (
    <div>
      <div className="background_box" style={{zIndex:1}} >
        <BackgroundContainer
        key={currentWeather.id}
        summary={currentWeather.summary}
        temperature={currentWeather.temperature}
        />
      </div>
      <div className="index-boxes grid-x grid-margin-x align-center large-6 medium-8 small-12">
        <div className="city_box" style={{zIndex:2}}>
        <SearchBarComponent
          getWeather={getWeather}
        />
        </div>
        <div className="current_box" style={{zIndex:2}}>
          <WeatherBoxContainer
          key={currentWeather.id}
          summary={currentWeather.summary}
          temperature={currentWeather.temperature}
          humidity={currentWeather.humidity}
          precipProbability={currentWeather.precipProbability}
          future={currentDailyWeather.summary}
          location={currentLocation}
          />
        </div>
        <div className="body_box" style={{zIndex:2}}>
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
