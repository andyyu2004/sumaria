import React from 'react'
import { navigate } from '@reach/router';
import './registerSuccess.css';




const RegisterSuccess = props => {

  //const [sec, setSec] = useState(5);

  
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
      <p>Redirect to <a href="/login">login page</a> in 5 seconds...</p>
    </div>

  );
};
// After setting up SMTP server and related email handlings:
// <p className="lead"><strong>Please check your email</strong> to activate your account.</p>
export default RegisterSuccess;