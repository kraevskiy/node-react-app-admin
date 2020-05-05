import React from 'react'
import AuthRoutes from "../../routes/AuthRoutes"
import TopBar from "../../components/TopBar/"


const AuthLayout = () => {
  return (
    <div>
      <TopBar/>
      <AuthRoutes/>
    </div>
  )
}

export default AuthLayout