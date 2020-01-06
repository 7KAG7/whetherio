import React, { useState, useEffect }  from "react"
import WinterGrass from "./WinterGrass"
import Rain from "./Rain"
import Snow from "./Snowing"
import SummerClear from "./SummerClear"
import ClearCool from "./ClearCool"
import Cloudy from "./Cloudy"
import Fog from "./Fog"

const BackgroundContainer = props => {

  let background
    if (props.temperature > 80 && props.summary.includes("Light Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Drizzle")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Clear")) {
      background =  <div>
                      <img className="background_box" src={SummerClear} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Mostly Cloudy")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Cloudy")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Overcast")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 80 && props.summary.includes("Humid")) {
      background =  <div>
                      <img className="background_box" src={SummerClear} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Light Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Drizzle")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Clear")) {
      background =  <div>
                      <img className="background_box" src={ClearCool} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Mostly Cloudy")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Cloudy")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Overcast")) {
      background =  <div>
                      <img className="background_box" src={Cloudy} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Foggy")) {
      background =  <div>
                      <img className="background_box" src={Fog} />
                    </div>
    } else if (props.temperature > 60 && props.temperature < 79.99 && props.summary.includes("Humid")) {
      background =  <div>
                      <img className="background_box" src={ClearCool} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Flurries")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Light Snow")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Snow")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99  && props.summary.includes("Light Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Drizzle")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Clear")) {
      background =  <div>
                      <img className="background_box" src={ClearCool} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Mostly Cloudy")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Cloudy")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Overcast")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature > 33 && props.temperature < 59.99 && props.summary.includes("Foggy")) {
      background =  <div>
                      <img className="background_box" src={Fog} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Flurries")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Drizzle")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Light Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Rain")) {
      background =  <div>
                      <img className="background_box" src={Rain} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Light Snow")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Snow")) {
      background =  <div>
                      <img className="background_box" src={Snowing} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Clear")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Mostly Cloudy")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Cloudy")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    } else if (props.temperature < 32.99 && props.summary.includes("Overcast")) {
      background =  <div>
                      <img className="background_box" src={WinterGrass} />
                    </div>
    }

  return (
    <div>
      {background}
    </div>
  )
}

export default BackgroundContainer
