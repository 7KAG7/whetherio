import React from "react"

const HeadContainer = props => {

  return (
    <div className="body-boxes grid-x medium-6">

      <h5 htmlFor="head-box-1-label" className="box-label">Head Accessory 1:
      <box type="text" className="head-box"></box>
      </h5>

      <h5 htmlFor="head-box-2-label" className="box-label">Head Accessory 2:
      <box type="text" className="head-box"></box>
      </h5>

      <h5 htmlFor="head-box-3-label" className="box-label">Head Accessory 3:
      <box type="text" className="head-box"></box>
      </h5>

    </div>
  )
}

export default HeadContainer
