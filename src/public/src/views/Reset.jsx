import React, { useState } from 'react'
import { navigate } from '@reach/router'
// import { Redirect } from 'react-router';

const resetContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(111deg, #6a11cb, #6a7cda, #2575fc)"
}

const resetForm = {
  "width": "400px",
  "background": "#fff",
  "borderRadius": "20px",
  "overflow": "hidden",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "30px 30px 30px 30px",
  "margin": "20px"
}

const emailInput = {
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#c6c6c6",
  "display": "block",
  "width": "206px",
  "background": "#e6e6fa",
  "height": "20px",
  "borderRadius": "10px",
  "padding": "8px",
  "margin": "4px 30px 4px 4px"
}

const emailInputFocus = {
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

const submitButton = {
  "width": "186px",
  "display": "block",
  "paddingTop": "20px",
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#07094a",
  "textTransform": "uppercase",
  "height": "30px",
  "borderRadius": "20px",
  "background": "#829eff",
  "padding": "0 20px",
  "margin": "10px 100px 0px 100px",
  "WebkitTransition": "all 0.4s",
  "OTransition": "all 0.4s",
  "MozTransition": "all 0.4s",
  "transition": "all 0.4s",
  "textAlign": "center"

}

const forgetPwd = {
  "fontFamily": "Roboto",
  "fontSize": "13.5px",
  "lineHeight": "1",
  "color": "#b48080"
}

const resetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}

const symbol = {
  "float": "left",
  "margin": "2px 2px 2px 30px"
}

const Reset = props => {

  const [email, setEmail] = useState("");

  const handleReset = async function (e) {
    //alert('reset');
    e.preventDefault();
    //console.log(email);
    //let resp = await API.resetP();
    navigate('/reset/sent');
    //window.location.hash = "#/reset/sent";
    //return <Redirect to="/reset/sent" />;
    // go to /reset/sent

  }

  return (
    <div>
      <div style={resetContainer}>
        <div style={resetForm}>
          <div className="text-center">
            <h3><i className="fa fa-lock fa-4x" /></h3>
            <h2 className="text-center">Forgot Password?</h2>
            <p className="text-center" style={resetText}>We got your back. You can reset your password here.</p>
            <div className="panel-body">
              <form id="register-form" onSubmit={handleReset} autoComplete="off" className="form">
                <div className="form-group">
                  <div className="input-group">
                    <div style={symbol}>
                    <i className="far fa-envelope" aria-hidden="true" />
                    </div>
                    <input id="email" name="email" style={emailInput} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control" type="email" required />
                  </div>
                </div>
                <div class="form-group" >
                  <input name="recover-submit" className="form-control" style={submitButton} defaultValue="Reset" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;