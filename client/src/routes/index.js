import React from "react"
import {Switch, Route} from 'react-router-dom'
import Auth from "../pages/auth"
import Analytics from "../pages/analytics"

export default () => {
  return (
    <Switch>
      <Route path={'/auth'} component={Auth} />
      <Route path={'/analytics'} component={Analytics} />
    </Switch>
  )
}