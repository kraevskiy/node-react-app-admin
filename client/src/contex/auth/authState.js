import React, {useReducer} from "react"
import axios from 'axios'
import {AuthContext} from "./authContext"
import {authReducer} from "./authReducer"
import {AUTOLOGIN, ERROR, LOGIN, LOGOUT, SET_LOADING} from "../types"
import {toast} from "../../services/materialize"
import jwt from 'jsonwebtoken'

export const AuthState = ({children}) => {
  axios.interceptors.request.use()

  const initialState = {
    isLogged: false,
    loading: false,
    token: null,
    error: null,
    isInitAutoLogin: false,
    user: {}
  }

  const [authState, dispatch] = useReducer(authReducer, initialState)

  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    })
  }

  const login = async (email, password) => {
    setLoading()
    await axios.post('/api/auth/login', {email, password})
      .then(res => {
        localStorage.setItem('auth-token', res.data.token)
        dispatch({
          type: LOGIN,
          payload: {token: res.data.token, user: {email}}
        })
      }).catch(error => {
        toast(error.response.data.message)
        dispatch({
          type: ERROR,
          payload: error.response.data.message
        })
      })
  }

  const logout = () => {
    setLoading()
    localStorage.clear()
    dispatch({
      type: LOGOUT
    })
  }

  const autoLogin = () => {
    // setLoading()
    const token = localStorage.getItem('auth-token')
    if(token){
      console.log('if(token){');
      const decodeToken = jwt.decode(token.split(' ')[1])
      const nowDate = Math.round(new Date().getTime()/1000)
      const isExpired = decodeToken.exp > nowDate
      if(isExpired){
        dispatch({
          type: AUTOLOGIN,
          payload: {
            token: token,
            user: {email: decodeToken.email}
          }
        })
        console.log('if(isExpired){');
        // login(token.email, 12345654)
      }else {
        // logout()
      }
    } else {
      // logout()
    }
  }

  const register = async ({email, password}) => {
    setLoading()

    await axios.post('/api/auth/register', {email, password})
      .then(res => {
        if(res.status === 201) {
          login(email, password)
        }
      }).catch(error => {
        toast(error.response.data.message)
        dispatch({
          type: ERROR,
          payload: error.response.data.message
        })
      })
  }

  const {isLogged, loading, error, token, isInitAutoLogin} = authState

  return (
    <AuthContext.Provider
      value={{
        isLogged, loading, token,  error, isInitAutoLogin, login, logout, register, autoLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}