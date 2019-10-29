import React from "react"

import WeatherBoxContainer from "./WeatherBoxContainer"
import BodyBoxContainer from './BodyBoxContainer'

const IndexContainer = props => {

  return (
    <div>
      <h1 id="index-title">Weather and What to Wear</h1>
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
