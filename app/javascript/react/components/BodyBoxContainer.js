import React, { useState, useEffect } from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HeadTile from "./HeadTile"
import TorsoTile from "./TorsoTile"
import LegsTile from "./LegsTile"
import FootwearTile from "./FootwearTile"

const BodyBoxContainer = props => {

  return (
    <div>
      <div className="body-boxes">
        <div type="text" className="body-box">
          <HeadTile
          key={props.id}
          summary={props.summary}
          temperature={props.temperature}
          user={props.user}
          />
        </div>
      </div>
      <div className="body-boxes ">
        <div type="text" className="body-box">
          <TorsoTile
          key={props.id}
          summary={props.summary}
          temperature={props.temperature}
          user={props.user}
          />
        </div>
      </div>
      <div className="body-boxes ">
        <div type="text" className="body-box">
          <LegsTile
          key={props.id}
          summary={props.summary}
          temperature={props.temperature}
          user={props.user}
          />
        </div>
      </div>
      <div className="body-boxes ">
        <div type="text" className="body-box">
          <FootwearTile
          key={props.id}
          summary={props.summary}
          temperature={props.temperature}
          user={props.user}
          />
        </div>
      </div>
  </div>
  )
}

export default BodyBoxContainer
