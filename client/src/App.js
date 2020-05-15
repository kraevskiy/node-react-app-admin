import React, {useContext, useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"
import AuthLayout from "./hoc/Layouts/AuthLayout"
import AdminLayout from "./hoc/Layouts/AdminLayout"
import {AuthContext} from "./contex/auth/authContext"
import LineLoader from "./components/LineLoader"

function App() {
  const {isLogged, autoLogin, isInitAutoLogin, logout, loading} = useContext(AuthContext)
  useEffect(()=>{
    if(isInitAutoLogin) return
    autoLogin()
  }, [isLogged, autoLogin, isInitAutoLogin])
  return (
    <BrowserRouter>
      <button onClick={()=>{logout()}}>asdfasdf</button>
      {loading && <LineLoader/>}
      <div className="App">
        {isLogged ? <AdminLayout/> : <AuthLayout/>}
      </div>
    </BrowserRouter>
  );
}

export default App
