import React, { useState } from 'react'
import { navigate } from '@reach/router';
import './registerSuccess.css';

const RegisterSuccess = props => {

  const [sec, setSec] = useState(5);

  const redirectLogin = e => {
    setInterval(() => {
      setSec(sec - 1);
      if (sec === 0) navigate('/login');
    }, 1000);
  }

  redirectLogin();

  return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <h1 className="display-3">Thank You for Joining Us!</h1>
      <p className="lead"><strong>Please check your email</strong> to activate your account.</p>
      <p>Redirect to <a href="/login">login page</a> in {'{'}sec{'}'} seconds...</p>
    </div>

  );
};

export default RegisterSuccess;