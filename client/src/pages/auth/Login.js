import React, {useContext, useEffect, useState} from 'react'
import LineLoader from "../../components/LineLoader"
import {AuthContext} from "../../contex/auth/authContext"

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordValid, setPasswordValid] = useState(false)
  const [isFormValid, setFormValid] = useState(false)
  const {login, error, loading, logout} = useContext(AuthContext)

  const handleChange = e => {
    e.preventDefault()
    const target = e.target
    if (target.name === 'email') {
      setEmail(target.value)
      if (target.validity.valid) {
        setEmailValid(true)
        target.classList.remove('invalid')
      } else {
        target.classList.add('invalid')
      }
    } else {
      setPassword(target.value)
      if (target.validity.valid) {
        setPasswordValid(true)
        target.classList.remove('invalid')
      } else {
        target.classList.add('invalid')
      }
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!isFormValid) return
    login(email, password)
  }

  useEffect(() => {
    if (emailValid && passwordValid) setFormValid(true)
  }, [emailValid, passwordValid])

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 l6 offset-l3"
             style={{paddingTop: "15vh"}}>
          <div className="card">
            {loading && <LineLoader/>}
            <form
              className="card-content"
              onSubmit={handleSubmit}
            >
              <div className="card-title">Войти в систему</div>
              <div className="input-field">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={e => handleChange(e)}
                  required
                  className="validate"/>
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error="Введите корректный Email" data-success=""/>
              </div>
              <div className="input-field">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => handleChange(e)}
                  minLength={6}
                  required
                  className="validate"/>
                <label htmlFor="password">Пароль</label>
                <span className="helper-text" data-error="Пароль должен быть больше 5 символов" data-success=""/>
              </div>
              <div className="card-action">
                <button
                  className="btn waves-effect waves-light"
                  type="submit"
                  disabled={!isFormValid || loading}
                >
                  Войти
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login