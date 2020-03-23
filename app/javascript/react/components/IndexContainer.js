import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HourlyBoxContainer from "./HourlyBoxContainer"
import MapsBoxContainer from "./MapsBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'
import SearchBarComponent from './SearchBarComponent'
import BackgroundContainer from './BackgroundContainer'


const IndexContainer = props => {
  const [currentWeather, setCurrentWeather] = useState ("")
  const [currentLocation, setCurrentLocation] = useState ("")
  const [currentDailyWeather, setCurrentDailyWeather] = useState ("")
  const [currentHourlyWeather, setCurrentHourlyWeather] = useState ("")
  const [currentHoursHourlyWeather, setCurrentHoursHourlyWeather] = useState ("")
  const [user, setUser] = useState (null)
  const [currentMaps, setCurrentMaps] = useState ("")

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
        setCurrentHourlyWeather(body.weather.hourly)
        setCurrentHoursHourlyWeather(body.weather.hourly.data[1])
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
      setCurrentHourlyWeather(body.weather.hourly)
      setCurrentHoursHourlyWeather(body.weather.hourly.data[1])
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
      <div className="index-boxes grid-x grid-margin-x align-center large-6 medium-8 small-8">
        <div className="hourly_box" style={{zIndex:2}}>
          <HourlyBoxContainer
          key={currentHoursHourlyWeather.id}
          timeStamp={currentHoursHourlyWeather.time}
          currentTemp={currentWeather.temperature}
          currentTime={currentWeather.time}
          temperature={currentHoursHourlyWeather.temperature}
          />
        </div>
        <div className="city_box" style={{zIndex:2}}>
          <SearchBarComponent
            getWeather={getWeather}
          />
        </div>
        <div className="current_box" style={{zIndex:2}}>
          <WeatherBoxContainer
          key={currentWeather.id}
          summary={currentWeather.summary}
          feelslike={currentWeather.apparentTemperature}
          hourlysum={currentHourlyWeather.summary}
          icon={currentWeather.icon}
          temperature={currentWeather.temperature}
          humidity={currentWeather.humidity}
          precipProbability={currentWeather.precipProbability}
          future={currentDailyWeather.summary}
          location={currentLocation}
          windSpeed={currentWeather.windSpeed}
          windGust={currentWeather.windGust}
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
    </div>
  )
}

export default IndexContainer
