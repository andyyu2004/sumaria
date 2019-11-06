import React, { useState } from 'react'
import { navigate } from '@reach/router';

const ResetContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(-111deg, #6a11cb, #6a7cda, #2575fc)"
}

const ResetForm = {
  "width": "305px",
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

const ResetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}



const ResetSent = props => {

  const [sec, setSec] = useState(5);

  const redirectLogin = e => {
    setInterval(() => {
      setSec(sec-1);
      if (sec === 0) navigate('/login');
    }, 1000);
  }

  redirectLogin();

  return (
    <div>
      <div style={ResetContainer}>
        <div style={ResetForm}>
          <div className="text-center" style={ResetText}>
              <h3><i className="fa fa-unlock-alt fa-4x" /></h3>
            <h2 className="text-center">Dear user:</h2>
            <p>Your password reset email has been sent.</p>
            <p>You should receive a password reset link shortly.</p>
            <p>Redirect to <a href="/">home</a> page in {sec} seconds...</p>
            <div className="panel-body">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSent;