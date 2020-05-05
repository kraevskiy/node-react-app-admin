import React from 'react'
import {BrowserRouter} from "react-router-dom"
import AuthLayout from "./hoc/Layouts/AuthLayout"

function App() {
  const isAuth = () => {
    return false
  }
  return (
    <BrowserRouter>
      <div className="App">
        {isAuth() ? null : <AuthLayout/>}
      </div>
    </BrowserRouter>
  );
}

export default App
