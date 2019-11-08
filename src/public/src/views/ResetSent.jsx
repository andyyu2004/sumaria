import React, { useState } from 'react'
import { navigate } from '@reach/router';
import './Reset.css'

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
      <div className='reset-container'>
        <div className='reset-form'>
          <div className="text-center">
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