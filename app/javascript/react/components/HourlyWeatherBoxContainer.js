import React, { useState, useEffect }  from "react"


const HourlyWeatherBoxContainer = props => {
  const [currentHourlyWeather, setCurrentHourlyWeather] = useState ("")

  useEffect(() => {
    fetch('api/v1/weathers')
    .then(response => {
      return response.json()
    })
    .then(fetchedHourlyWeather => {
      let getHourlyWeather = fetchedHourlyWeather.hourly
      setCurrentHourlyWeather(getHourlyWeather)
    })
  }, [])

  // const hourly_weather = currentHourlyWeather.hourly.data((hourly) => {
  //   debugger
  //   return (
  //     <div className="hour-one" key={hourly.time}>
  //       <div>12:00-1:00am: {summary} temp: {temperature} chance of rain: {precipProbability}</div>
  //     </div>
  //   )
  // })


  return (
    <div>
      <h3 htmlFor="primary-weather" id="weather-box-title">Hourly Conditions:</h3>
        <div id="hourly-weather-box">
          <div>Outlook: {currentHourlyWeather.summary} </div>
        </div>
    </div>
  )
}

export default HourlyWeatherBoxContainer
