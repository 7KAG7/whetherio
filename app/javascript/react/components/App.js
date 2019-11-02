import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import IndexContainer from './IndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
