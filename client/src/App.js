import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {Button} from "react-materialize"
import Routes from './routes'
import TopBar from "./components/TopBar"

function App() {
  const testFetch = async () =>{
    await fetch('/api/category')
      .then(res => {
        console.log(res);
      })
  }
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App
