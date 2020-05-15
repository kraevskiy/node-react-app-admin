import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

export default () => {
  return (
    <Switch>
      <Route path={'/login'} component={Login} />
      <Route path={'/register'} component={Register} />
      <Route path={'/'} exact>
        <Redirect to={'/login'}/>
      </Route>
    </Switch>
  )
}