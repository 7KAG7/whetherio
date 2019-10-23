import React from "react"

const BodyBoxContainer = props => {

  return (
    <div className="body-boxes grid-x small-8 medium-6 large-2">

      <label htmlFor="head-box-1-label" className="box-label">Head Accessory 1:</label>
      <box type="text" className="head-box"></box>


      <label htmlFor="head-box-2-label" className="box-label">Head Accessory 2:</label>
      <box type="text" className="head-box"></box>

      <label htmlFor="head-box-3-label" className="box-label">Head Accessory 3:</label>
      <box type="text" className="head-box"></box>
    </div>
  )
}

export default BodyBoxContainer
