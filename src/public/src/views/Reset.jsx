import React, { useState } from 'react'
import { navigate } from '@reach/router'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import './Reset.css'
// import { Redirect } from 'react-router';

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
      <div className='reset-container'>
        <div className='reset-form'>
          <i className="fa fa-lock fa-8x reset-icon"/>
          <h2 className="text-center">Forgot Password?</h2>
          <p className="text-center">We got your back. You can reset your password here.</p>
          <form id="register-form" role="form" onSubmit={handleReset} autoComplete="off" className="form">
            <InputGroup>
              <i className="fa fa-envelope reset-small-icon" aria-hidden="true" />
              <input id="email" name="email" className='form-control' value={email} 
              onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control" type="email" required />
            </InputGroup>
            <Button variant='success' className='reset-button' name="recover-submit" defaultValue="Reset" type="submit" block>Submit</Button>

          </form>
          
          {/* <div className="text-center">
            <h3><i className="fa fa-lock fa-4x" /></h3>
            <h2 className="text-center">Forgot Password?</h2>
            <p className="text-center" style={resetText}>We got your back. You can reset your password here.</p>
            <div className="panel-body">
              <form id="register-form" role="form" onSubmit={handleReset} autoComplete="off" className="form">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reset;