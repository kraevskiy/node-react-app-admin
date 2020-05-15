import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {AuthState} from "./contex/auth/authState"

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App/>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
