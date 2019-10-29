import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
import WeatherBoxContainer from "./WeatherBoxContainer"

Enzyme.configure({ adapter: new Adapter() })

describe("WeatherBoxContainer", () => {
  let wrapper = mount(
      <WeatherBoxContainer/>
  )

  it("should render a box with a title of Todays Weather", () => {
    expect(wrapper.text(<div><h4>Todays Weather:</h4></div>)).toBeTruthy()
  })
})
