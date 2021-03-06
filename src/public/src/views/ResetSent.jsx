import React, { useState } from 'react'
import { navigate } from '@reach/router';
import './Reset.css'

const ResetSent = props => {

  //const [sec, setSec] = useState(5);


  const redirectLogin = e => {
    /*
    setInterval(() => {
      setSec(sec-1);
      if (sec === 0) navigate('/login');
    }, 1000);
    */
    setTimeout(() => {
      //clearInterval(cd);
      navigate('/login');
   }, 4000);
  }

  redirectLogin();

  return (
    <div>
      <div className='reset-container'>
        <div className='reset-form'>
          <div className="text-center">
              <h3><i className="fa fa-unlock-alt fa-4x reset-icon" /></h3>
            <h2 className="text-center">Dear user:</h2>
            <p>Your password reset email has been sent.</p>
            <p>You should receive a password reset link shortly.</p>
            <p>Redirect to <a href="/login">home</a> page in 5 seconds...</p>
            <div className="panel-body">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetSent;