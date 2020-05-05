import React from 'react'
import {NavLink} from "react-router-dom"

const TopBar = () => {

  return (
    <div>
      <NavLink to={'/auth'} exact>Auth</NavLink>
      <NavLink to={'/analytics'} exact>Analytics</NavLink>
    </div>
  )
}

export default TopBar