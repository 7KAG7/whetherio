//build a react Format

import React, { useState, useEffect } from "react"

const SearchBarComponent = props => {
  const [city, setCity] = useState ("")
  const [userState, setUserState] = useState ("")
  const [zip, setZip] = useState ("")

  const handleInputChange = event => {
    if (event.currentTarget.id === "city") {
      setCity(event.currentTarget.value)
    } else if (event.currentTarget.id === "state") {
      setUserState(event.currentTarget.value)
    } else if (event.currentTarget.id === "zip") {
      setZip(event.currentTarget.value)
    }
  }

  const clearForm = () => {
    event.preventDefault()
    setCity("")
    setUserState("")
    setZip("")
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
  const formPayload = {
    city: city,
    state: userState,
    zip: zip
  }
    props.getWeather(formPayload)
    clearForm()
  }

  return (
    <form className="searchBar" onSubmit={onSubmitHandler}>
      <label className="pulse">
        <input onChange={handleInputChange} value={city} type="text" id="city" placeholder="Please enter a City, State or Zip"/>
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default SearchBarComponent
