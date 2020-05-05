import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from "../pages/auth"

export default () => {
  return (
    <Switch>
      <Route path={'/login'} component={Auth} />
      <Route path={'/register'} component={Auth} />
      <Route path={'/'} exact>
        <Redirect to={'/login'}/>
      </Route>
    </Switch>
  )
}