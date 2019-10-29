import React from "react"

import HeadContainer from "./HeadContainer"
import TorsoContainer from "./TorsoContainer"
import LegsContainer from "./LegsContainer"
import FootwearContainer from "./FootwearContainer"

const BodyBoxContainer = props => {

  return (
    <div>
      <HeadContainer />
      <TorsoContainer />
      <LegsContainer />
      <FootwearContainer />
    </div>
  )
}

export default BodyBoxContainer
