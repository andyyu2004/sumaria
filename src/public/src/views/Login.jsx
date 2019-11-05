import React, { useState } from 'react'
import SumariaLogo from '../assets/images/logos/SumariaLogoSample.jpeg'
import API from '../api'

const loginContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(111deg, #1a2353, #2c42b2, #6a7cda, #c6ccf0)"
}

const loginForm = {
  "width": "280px",
  "background": "#fff",
  "borderRadius": "20px",
  "overflow": "hidden",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "space-between",
  "padding": "30px 30px 30px 30px",
  "margin": "20px",
  "justifyContent": "center",
  "alignItems": "center"
}

const loginInput = {
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#c6c6c6",
  "display": "block",
  "width": "186px",
  "background": "#e6e6fa",
  "height": "25px",
  "borderRadius": "10px",
  "padding": "8px",
  "margin": "4px 4px 10px 30px",
}

const symbol = {
  "float": "left",
  "margin": "3px"
}

const loginInputFocus = {
  "display": "block",
  "position": "absolute",
  "borderRadius": "20px",
  "bottom": "0",
  "left": "0",
  "zIndex": "-1",
  "width": "100%",
  "height": "100%",
  "boxShadow": "0px 0px 0px 0px",
  "color": "#5fb1e3"
}

const loginButton = {
  "width": "180px",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#0c0d6b",
  "textTransform": "uppercase",
  "height": "40px",
  "borderRadius": "20px",
  "background": "#829eff",
  "alignItems": "center",
  "padding": "0px 20px",
  "margin": "10px 0px 10px 0px",
  "WebkitTransition": "all 0.4s",
  "OTransition": "all 0.4s",
  "MozTransition": "all 0.4s",
  "transition": "all 0.4s"
}



const forgetPwd = {
  "fontFamily": "Roboto",
  "fontSize": "13.5px",
  "lineHeight": "2",
  "color": "#b48080"
}

const createAccount = {
  "fontFamily": "Roboto",
  "fontSize": "13.5px",
  "lineHeight": "2",
}


const Login = props => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onSubmit = async e => {
    e.preventDefault()

    const res = await API.login(username, password);
    console.log(res)
  };


  return (
    <div>
      <div style={loginContainer}>
        <div className="loginBox">
          <img src={SumariaLogo} alt="Sumaria" style={{ borderRadius: "50%" }} />
          <form style={loginForm} onSubmit={onSubmit}>
            <div data-validate="Valid email is required: example@sumaria.ca">
              <span className="symbol" style={symbol}>
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
              <input style={loginInput} type="text" name="email" placeholder="Email" value={username} onChange={e => setInputs({ ...inputs, username: e.target.value })} />
              <span style={loginInputFocus} />
            </div>
            <div data-validate="Password is required">
              <span className="symbol" style={symbol}>
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
              <input style={loginInput} type="password" name="pass" placeholder="Password" value={password} onChange={e => setInputs({ ...inputs, password: e.target.value })} />
              <span style={loginInputFocus} />
            </div>
            <div>
              <button style={loginButton}>
                Login
              </button>
            </div>
            <div style={forgetPwd}>
              <span>
                Forgot <a href="/reset">Username / Password?</a>
              </span>
            </div>
            <div style={createAccount}>
              <a href="/register">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;