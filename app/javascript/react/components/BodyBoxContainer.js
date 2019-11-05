import React from "react"
import WeatherBoxContainer from "./WeatherBoxContainer"
import HeadTile from "./HeadTile"
import TorsoTile from "./TorsoTile"
import LegsTile from "./LegsTile"
import FootwearTile from "./FootwearTile"


const BodyBoxContainer = props => {
//add use state for each


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

  // const head_tile = changetostateofhead.map((head) => {
  //   return(
  //     <HeadTile
  //       key={head.id}
  //       head={head.item}
  //     />
  //   )
  // })

  // const torso_tile = changetostateoftorso.map((torso) => {
  //   return(
  //     <TorsoTile
  //       key={torso.id}
  //       torso={torso.item}
  //     />
  //   )
  // })

  // const legs_tile = changetostateoflegs.map((leg) => {
  //   return(
  //     <LegsTile
  //       key={leg.id}
  //       leg={leg.item}
  //     />
  //   )
  // })
  //
  // const footwear_tile = changetostateoffootwear.map((footwear) => {
  //   return(
  //     <FootwearTile
  //       key={footwear.id}
  //       footwear={footwear.item}
  //     />
  //   )
  // })
  <link href="https://www.amazon.com/Lindo-Trucker-Hat-Outdoors-Collection/dp/B06WV7411J/ref=as_li_ss_il?ac_md=3-3-bWVucyB0cnVja2VyIGhhdHM=-ac_d_rm&crid=1E1RU7O0276DT&keywords=mens+hats&pd_rd_i=B06WV7411J&pd_rd_r=f3d69428-3bdf-48f6-b1e2-33cc78f8329d&pd_rd_w=UKSZ3&pd_rd_wg=zUyhw&pf_rd_p=ed481207-4bea-4e19-bbad-73ed40fdc292&pf_rd_r=2036VZS0V00P12F7ABHQ&psc=1&qid=1572964237&sprefix=mens+hats,aps,213&linkCode=li1&tag=whetherio-20&linkId=dea5d16123ae54495de201db530a850e&language=en_US" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B06WV7411J&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=whetherio-20&language=en_US" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=whetherio-20&language=en_US&l=li1&o=1&a=B06WV7411J" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />



  return (
    <div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box">

      </div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box"></div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box"></div>
    </div>
    <div className="body-boxes grid-x medium-6">
      <div type="text" className="body-box"></div>
    </div>
  </div>
  )
}

export default BodyBoxContainer
