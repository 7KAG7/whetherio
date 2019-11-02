import React from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"

const BodyBoxContainer = props => {

  //get current weather from WeatherBoxContainer

  //let male_80_sunny = corresponding outfit
  //if user.gender === "male" && props.temp === >80 && props.condition === "clear" || props.condition === "cloudy"
  //return male_80_sunny

  //let male_80_rain = corresponding outfit
  //if user.gender === "male" && props.temp === >80 && props.condition === "rain"
  //return male_80_sunny


  //articles dependante on if the user is male/female. option if the user wants to see male of female cloths

  //conditional show if the temperature is >80deg
  //if 80deg+ conditional on conditionS of rain or sun

  //conditional show if the temperature is 60-79deg
  //if 60-79deg conditional on conditionS of rain or sun

  //conditional show if the temperature is 30-59deg
  //if 60-79deg conditional on conditionS of rain or sun

  //conditional show if the temperature is <29deg
  //if -29deg conditional on conditionS of rain/snow or sun

  //1 headwear male >80 sunny, glasses
  //1 headwear male >80 rainy, hat
  //1 torso male >80 sunny, hiwaiian shirt
  //1 torso male >80 rainy, light rain coat
  //1 pants male >80 sunny, cargo/golf shorts
  //1 pants male >80 rainy, board shorts
  //1 footwear male >80 sunny, sandals
  //1 footwear male >80 rainy, light waterproof shoes

  //1 headwear male 60-79deg sunny, glasses
  //1 headwear male 60-79deg rainy, hat
  //1 torso male 60-79deg sunny, hiwaiian shirt
  //1 torso male 60-79deg rainy, light rain coat
  //1 pants male 60-79deg sunny, cargo/golf shorts
  //1 pants male 60-79deg rainy, board shorts
  //1 footwear male 60-79deg sunny, sandals
  //1 footwear male 60-79deg rainy, light waterproof shoes

  //1 headwear male 30-59deg sunny, glasses
  //1 headwear male 30-59deg rainy, hat
  //1 torso male 30-59deg sunny, hiwaiian shirt
  //1 torso male 30-59deg rainy, light rain coat
  //1 pants male 30-59deg sunny, cargo/golf shorts
  //1 pants male 30-59deg rainy, board shorts
  //1 footwear male 30-59deg sunny, sandals
  //1 footwear male 30-59deg rainy, light waterproof shoes

  //1 headwear male <29deg sunny, glasses
  //1 headwear male <29deg rainy, hat
  //1 torso male <29deg sunny, hiwaiian shirt
  //1 torso male <29deg rainy, light rain coat
  //1 pants male <29deg sunny, cargo/golf shorts
  //1 pants male <29deg rainy, board shorts
  //1 footwear male <29deg sunny, sandals
  //1 footwear male <29deg rainy, light waterproof shoes

  //1 headwear female >80 sunny,
  //1 headwear female >80 rainy,
  //1 torso female >80 sunny,
  //1 torso female >80 rainy,
  //1 pants female >80 sunny,
  //1 pants female >80 rainy,
  //1 footwear female >80 sunny,
  //1 footwear female >80 rainy,

  //1 headwear female 60-79deg sunny,
  //1 headwear female 60-79deg rainy,
  //1 torso female 60-79deg sunny,
  //1 torso female 60-79deg rainy,
  //1 pants female 60-79deg sunny,
  //1 pants female 60-79deg rainy,
  //1 footwear female 60-79deg sunny,
  //1 footwear female 60-79deg rainy,

  //1 headwear female 30-59deg sunny,
  //1 headwear female 30-59deg rainy,
  //1 torso female 30-59deg sunny,
  //1 torso female 30-59deg rainy,
  //1 pants female 30-59deg sunny,
  //1 pants female 30-59deg rainy,
  //1 footwear female 30-59deg sunny,
  //1 footwear female 30-59deg rainy,

  //1 headwear female <29deg sunny,
  //1 headwear female <29deg rainy,
  //1 torso female <29deg sunny,
  //1 torso female <29deg rainy,
  //1 pants female <29deg sunny,
  //1 pants female <29deg rainy,
  //1 footwear female <29deg sunny,
  //1 footwear female <29deg rainy,

  return (
    <div>
    <div className="body-boxes grid-x medium-6">

      <h5 htmlFor="head-box-1-label" className="box-label">Head Accessory 1:
      <p type="text" className="head-box"></p>
      </h5>

    </div>
    <div className="body-boxes grid-x medium-6">
      <h5 htmlFor="head-box-1-label" className="box-label">Torso Accessory 1:
      <p type="text" className="head-box"></p>
      </h5>
    </div>
    <div className="body-boxes grid-x medium-6">
      <h6 htmlFor="head-box-1-label" className="box-label">Legs Accessory 1:
      <p type="text" className="head-box"></p>
      </h6>
    </div>
    <div className="body-boxes grid-x medium-6">
      <h6 htmlFor="head-box-1-label" className="box-label ">Footwear Acc 1:
      <p type="text" className="head-box"></p>
      </h6>
    </div>
  </div>
  )
}

export default BodyBoxContainer
