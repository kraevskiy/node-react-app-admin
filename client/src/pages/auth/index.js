import React from 'react'
import {TextInput} from "react-materialize"

const Auth = (props) => {
  const isLoginPage = () => {
    return !props.match.path.includes('/register')
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m10 offset-m1 l6 offset-l3"
             style={{paddingTop: "15vh"}}>
          <div className="card">
            <form
              className="card-content"
            >
              <div className="card-title">
                {isLoginPage() ? "Войти в систему" : "Создать аккаунт"}
              </div>
              <div className="input-field">
                <input id="email" name="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <div className="row">
                  <TextInput
                    password
                    id="password"
                    label="Пароль"
                    validate
                    s={12}
                  />
                </div>
              </div>
              <div className="card-action">
                <button className="btn waves-effect waves-light" type="submit">
                  {isLoginPage() ? "Войти" : "создать"}
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

export default Auth