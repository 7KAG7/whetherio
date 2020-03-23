import React, { useState, useEffect }  from "react"
import SearchBarComponent from './SearchBarComponent'

const MapsBoxContainer = props => {

  return (
    <div>
      <div id="maps-weather-box">
        <h2>Todays Weather for:
          <p>{props.location}</p>
          <p>{props.maps}</p>

        </h2>
      </div>
    </div>
  )
}

export default MapsBoxContainer
