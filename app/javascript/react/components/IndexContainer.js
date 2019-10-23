import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <div>
        <WeatherBoxContainer/>
      </div>
      <div>
        <BodyBoxContainer/>
      </div>
    </div>
  )
}

export default IndexContainer
