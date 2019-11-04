import React from 'react'
import { Redirect } from 'react-router';

const ResetContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(111deg, #6a11cb, #6a7cda, #2575fc)"
}

const ResetForm = {
  "width": "205px",
  "background": "#fff",
  "borderRadius": "20px",
  "overflow": "hidden",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "space-between",
  "padding": "30px 30px 30px 30px",
  margin: "20px",
  justifyContent: "center",
  alignItems: "center"
}

const EmailInput = {
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#c6c6c6",
  "display": "block",
  "width": "186px",
  "background": "#e6e6fa",
  "height": "20px",
  "borderRadius": "10px",
  "padding": "8px",
  "margin": "4px"
}

const EmailInputFocus = {
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

const SubmitButton = {
  "width": "180px",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "paddingTop": "20px",
  "fontFamily": "Roboto",
  "fontSize": "15px",
  "lineHeight": "2",
  "color": "#0c0d6b",
  "textTransform": "uppercase",
  "height": "40px",
  "borderRadius": "20px",
  "background": "#829eff",
  "alignItems": "center",
  "padding": "0 20px",
  "WebkitTransition": "all 0.4s",
  "OTransition": "all 0.4s",
  "MozTransition": "all 0.4s",
  "transition": "all 0.4s"

}

const ForgetPwd = {
  "fontFamily": "Roboto",
  "fontSize": "13.5px",
  "lineHeight": "1",
  "color": "#b48080"
}

const ResetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}

const HandleReset = function (e) {
  //alert('reset');
  e.preventDefault();
  return <Redirect to="/reset/sent" />;
  // go to /reset/sent
}

const Reset = props => {
  return (
<div>
  <div style={ResetContainer}>
    <div style={ResetForm}>
      <div className="text-center">
          <h3><i className="fa fa-lock fa-4x" /></h3>
        <h2 className="text-center">Forgot Password?</h2>
        <p className="text-center" style={ResetText}>We got your back. You can reset your password here.</p>
        <div className="panel-body">
          <form id="register-form" role="form" onSubmit={HandleReset} autoComplete="off" className="form">
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue" /></span>
                <input id="email" name="email" style={EmailInput} placeholder="Email" className="form-control" type="email" />
              </div>
            </div>
            <div className="form-group">
              <input name="recover-submit" style={SubmitButton} className="btn btn-lg btn-primary btn-block" defaultValue="Reset Password" type="submit" />
            </div>
            <input type="hidden" className="hide" name="token" id="token" defaultValue /> 
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



  );
};

export default Reset;