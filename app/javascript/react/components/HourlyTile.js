import React, { useState, useEffect }  from "react"


const HourlyTile = props => {

  let timeStamp = new Date(props.time * 1000).toLocaleTimeString("en-US")

  return (
    <div>
      <div className="hourly_data" key={props.id}>{timeStamp} || Temp: {props.temperature}°F || {props.summary}</div>
    </div>
  )
}

export default HourlyTile
