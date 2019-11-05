import React, { useState, useEffect }  from "react"


const HourlyTile = props => {

  return (
    <div>
      <div>Time: {props.time} Temp: {props.temperature}F {props.summary}</div>
    </div>
  )
}

export default HourlyTile
