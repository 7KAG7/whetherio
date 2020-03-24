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
  const [currentHourZeroWeather, setCurrentHourZeroWeather] = useState ("")
  const [currentHourOneWeather, setCurrentHourOneWeather] = useState ("")
  const [currentHourTwoWeather, setCurrentHourTwoWeather] = useState ("")
  const [currentHourThreeWeather, setCurrentHourThreeWeather] = useState ("")
  const [currentHourFourWeather, setCurrentHourFourWeather] = useState ("")
  const [currentHourFiveWeather, setCurrentHourFiveWeather] = useState ("")
  const [currentHourSixWeather, setCurrentHourSixWeather] = useState ("")
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
        setCurrentHourZeroWeather(body.weather.hourly.data[0])
        setCurrentHourOneWeather(body.weather.hourly.data[1])
        setCurrentHourTwoWeather(body.weather.hourly.data[2])
        setCurrentHourThreeWeather(body.weather.hourly.data[3])
        setCurrentHourFourWeather(body.weather.hourly.data[4])
        setCurrentHourFiveWeather(body.weather.hourly.data[5])
        setCurrentHourSixWeather(body.weather.hourly.data[6])
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
      setCurrentHourZeroWeather(body.weather.hourly.data[0])
      setCurrentHourOneWeather(body.weather.hourly.data[1])
      setCurrentHourTwoWeather(body.weather.hourly.data[2])
      setCurrentHourThreeWeather(body.weather.hourly.data[3])
      setCurrentHourFourWeather(body.weather.hourly.data[4])
      setCurrentHourFiveWeather(body.weather.hourly.data[5])
      setCurrentHourSixWeather(body.weather.hourly.data[6])
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
          keyZero={currentHourZeroWeather.id}
          timeStampZero={currentHourZeroWeather.time}
          temperatureZero={currentHourZeroWeather.temperature}
          keyOne={currentHourOneWeather.id}
          timeStampOne={currentHourOneWeather.time}
          temperatureOne={currentHourOneWeather.temperature}
          keyTwo={currentHourTwoWeather.id}
          timeStampTwo={currentHourTwoWeather.time}
          temperatureTwo={currentHourTwoWeather.temperature}
          keyThree={currentHourThreeWeather.id}
          timeStampThree={currentHourThreeWeather.time}
          temperatureThree={currentHourThreeWeather.temperature}
          keyFour={currentHourFourWeather.id}
          timeStampFour={currentHourFourWeather.time}
          temperatureFour={currentHourFourWeather.temperature}
          keyFive={currentHourFiveWeather.id}
          timeStampFive={currentHourFiveWeather.time}
          temperatureFive={currentHourFiveWeather.temperature}
          keySix={currentHourSixWeather.id}
          timeStampSix={currentHourSixWeather.time}
          temperatureSix={currentHourSixWeather.temperature}
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
