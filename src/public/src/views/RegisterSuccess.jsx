import React, { useState } from 'react'
import { navigate } from '@reach/router';
import './registerSuccess.css';




const RegisterSuccess = props => {

  const [sec, setSec] = useState(5);

  
  const redirectLogin = e => {
    
    //cd = setInterval(countDown, 1000);
    setTimeout(() => {
      //clearInterval(cd);
      navigate('/login');
   }, 4000);
    
  }

  redirectLogin();
  
  //let cd = setInterval(countDown, 1000);
  
  return (
    <div className="container bg">
      <h1 className="display-3">Thank You for Joining Us!</h1>
      <p className="lead"><strong>Please check your email</strong> to activate your account.</p>
      <p>Redirect to <a href="/login">login page</a> in {sec} seconds...</p>
    </div>

  );
};

export default RegisterSuccess;