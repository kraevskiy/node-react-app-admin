import {AUTOLOGIN, ERROR, LOGIN, LOGOUT, SET_LOADING} from "../types"

const handlers = {
  [LOGOUT]: state => ({...state, token: null, isLogged: false, loading: false}),
  [LOGIN]: (state, {payload}) => ({...state, token: payload.token, user: payload.user, isLogged:true, loading: false}),
  [AUTOLOGIN]: (state, {payload}) => ({...state, token: payload.token, user: payload.user, isLogged:true, isInitAutoLogin: true, loading: false}),
  [ERROR]: (state, {payload}) => ({...state, error: payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  DEFAULT: state => state
}

export const authReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}