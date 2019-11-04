import React, { useState, useEffect }  from "react"


const HourlyTile = props => {

  return (
    <div>
      <div>{props.time} {props.temperature}F {props.summary}</div>
    </div>
  )
}

export default HourlyTile
