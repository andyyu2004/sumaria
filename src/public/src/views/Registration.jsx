import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactTooltip from 'react-tooltip';
import './registration.css';
import { navigate } from '@reach/router';
//import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
//import { navigate } from '@reach/router';
//import algoliasearch from 'algoliasearch/lite';
//import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

/*
const searchClient = algoliasearch(
  'plRG8O4KPXG0',
  '01329a32171d4008387778134780906b',
  {
    _useRequestCache: true,
  }
);
const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
  {
    _useRequestCache: true,
  }
);*/

const registerContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  //"justifyContent": "center",
  //"alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(115deg, #ffac81 1%, #ff928b 74%)"
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
  "margin": "20px"
}

const ResetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}



const Registration = props => {

  const [orgNameD, setOrgNameD] = useState(false);
  const [authKeyD, setAuthKeyD] = useState(false);
  const [orgNamePH, setOrgNamePH] = useState('');
  const [authKeyPH, setAuthKeyPH] = useState('');

  const [orgName, setOrgName] = useState('');
  const [authKey, setAuthKey] = useState('');

  const [userType, setUserType] = useState('none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('none');
  const [bdate, setBdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [addr, setAddr] = useState('');
  const [addr2, setAddr2] = useState('');

  const check_user_type = option => {
    //console.log(option);
    setUserType(option);

    if (option === "debug") {
      generateFormData();
    }

    if (option === "staff" || option === "admin") {
      setOrgNamePH('');
      setOrgNameD(false);

    } else {
      setOrgNamePH('N/A');
      setOrgNameD(true)
    }

    if (option === "admin") {
      setAuthKeyD(false);
      setAuthKeyPH('');
      //auth_key.value = '';

    } else {
      setAuthKeyD(true);
      setAuthKeyPH('N/A');
    }
  }

  const saveUser = () => {
    navigate('/register/success');
  }

  const validateSignUp = () => {

    saveUser();

  }

  const validatePwd = () => {
    if (password !== rePassword) {
      alert("Your password does not match! Please re-enter your password.");
      setPassword('');
      setRePassword('');
      return false;
    }
  }

  function generatePassword() {
    var length = 12,
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      pwd = "";
    for (var i = 0, n = charSet.length; i < length; ++i) {
      pwd += charSet.charAt(Math.floor(Math.random() * n));
    }
    return pwd;
  }

  const genderValue = ['male', 'female', 'unspecified'];

  function generateGender() {
    return genderValue[Math.floor(Math.random() * 3)];
  }

  function generateName() {
    var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var name = cap.charAt(Math.floor(Math.random() * 26));
    var length = 2 + Math.floor(Math.random() * 9),
        charSet = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0, n = charSet.length; i < length; ++i) {
      name += charSet.charAt(Math.floor(Math.random() * n));
    }
    return name;
  }

  function generateBDate() {
    var month, day, year, bdate;
    var m = Math.ceil(Math.random() * 12);
    if (m < 10) {
      month = '0' + m;
    } else {
      month = m;
    }
    var d = Math.ceil(Math.random() * 31);
    if (d < 10) {
      day = '0' + d;
    } else {
      day = d;
    }
    year = 1970 + Math.ceil(Math.random() * 50);
    bdate = month + '-' + day + '-' + year;
    return bdate;
  }

  function generatePhoneNumber() {
    var length = 7,
        number = "0123456789",
        p = "416-";
    for (var i = 0, n = number.length; i < length; ++i) {
        p += number.charAt(Math.floor(Math.random() * n));
    }
    return p;
  }

  function generateAddress() {
    var randomAddress = [
      "27 King's College Cir, Toronto, Ontario",
      "1265 Military Trail, Scarborough, Ontario"
    ];
    return randomAddress[Math.floor(Math.random()*randomAddress.length)];
  }

  const generateFormData = () => {
    setUserType('regular');
    setUsername('Test' + Math.floor(Math.random() * 1191 + Math.random() * 322 - Math.random() * 673));
    var pwd = generatePassword();
    setPassword(pwd);
    setRePassword(pwd);
    setFirstName(generateName());
    if (Math.floor(Math.random()) > 0.5) {
      setMiddleName(generateName());
    }
    setLastName(generateName());
    setGender(generateGender());
    setBdate(generateBDate());
    setPhone(generatePhoneNumber());
    setEmail('example' + Math.floor(Math.random() * 1234) + '@samaria.com');
    setAddr(generateAddress());
    //setAddr2();
  }

  return (
    <div style={registerContainer}>
      <div id="page-content" className="row">
        <div className="menu-panel-first">
          <h2>Create Account</h2>
          <br />
          <form name="signup-form" id="signup-form" className="signup-form" onSubmit={validateSignUp} >
            <h3 style={{ display: 'inline' }}>Account Info</h3>&nbsp;&nbsp;<ReactTooltip place="right" /><MDBIcon icon="info-circle" data-tip="You will have different access rights depend on your user type." />
            <div className="well form-horizontal">
              <div className="form-group">
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">User Type <MDBIcon icon="asterisk" className="pointer text ast" data-tip="This cannot be changed after registration. You have to submit a request if you wish to change this." />
                    </span>
                    <select id="user_type" className="form-control" required value={userType} onChange={e => check_user_type(e.target.value)}>
                      <option value='none' disabled hidden>Choose here</option>
                      <option value="regular">Regular</option>
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                      <option value="debug">This is for debuging only</option>
                    </select>
                  </div>
                  <div className="input-group" id="org_name_div">
                    <span className="input-group-addon mw-170">Organization Name</span>
                    <input disabled={orgNameD} placeholder={orgNamePH} type="text" className="form-control" name="organization_name" id="organization_name" pattern="^[a-zA-Z0-9!@#\$%\^&\*\)\(+=._-]{1,64}$" value={orgName} onChange={e => setOrgName(e.target.value)} />
                  </div>
                  <div className="input-group" id="auth_key_div">
                    <span className="input-group-addon mw-170">Authetication Key</span>
                    <input disabled={authKeyD} placeholder={authKeyPH} type="text" className="form-control" name="auth_key" id="auth_key" pattern="^[a-zA-Z0-9]{32}$" value={authKey} onChange={e => setAuthKey(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <h3 style={{ display: 'inline' }}>Login Info</h3>&nbsp;&nbsp;<MDBIcon icon="info-circle" data-tip="Mainly used for login" aria-hidden="true" />
            <div className="well form-horizontal">
              <div className="form-group">
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">User Name</span>
                    <input id="user_name" type="text" className="form-control" placeholder="username" required pattern="^[A-Za-z][A-Za-z0-9]*(?:[ _-][A-Za-z0-9]+)*$" minLength={3} maxLength={15} value={username} onChange={e => setUsername(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Sumaria Key</span>
                    <input id="password" type="password" className="form-control" placeholder="●●●●●●●●●●●●●●●●" required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$" value={password} onChange={e => setPassword(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Repeat Key</span>
                    <input type="password" className="form-control" name="re_password" id="re_password" value={rePassword} onChange={e => setRePassword(e.target.value)} onBlur={validatePwd} />
                  </div>
                </div>
              </div>
            </div>
            <h3 style={{ display: 'inline' }}>Basic Info</h3>&nbsp;&nbsp;<MDBIcon icon="info-circle" data-tip="We respect your privacy and take protecting it seriously" aria-hidden="true" />
            <div className="well form-horizontal">
              <div className="form-group">
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">First Name</span>
                    <input type="text" className="form-control" name="first_name" id="first_name" pattern="^[a-zA-Z]{1,64}$" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Middle Name</span>
                    <input type="text" className="form-control" name="middle_name" id="middle_name" pattern="^[a-zA-Z]{1,64}$" value={middleName} onChange={e => setMiddleName(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Last Name</span>
                    <input type="text" className="form-control" name="last_name" id="last_name" pattern="^[a-zA-Z]{1,64}$" value={lastName} onChange={e => setLastName(e.target.value)} required />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Gender</span>
                    <select id="gender" className="form-control" required value={gender} onChange={e => setGender(e.target.value)} >
                      <option value="none" disabled hidden>Choose here</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unspecified">Prefer Not to Answer</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Birth Date</span>
                    <input type="text" className="form-control" name="birth_date" id="birth_date" placeholder="MM-DD-YYYY" pattern="^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$" value={bdate} onChange={e => setBdate(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Phone Number</span>
                    <input type="text" className="form-control" name="phone_number" id="phone_number" placeholder="416-1234567" pattern="^\d+-?\d+$" value={phone} onChange={e => setPhone(e.target.value)} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Email</span>
                    <input type="email" className="form-control" name="email" id="email" required pattern="^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>

            <h4 style={{ display: 'inline' }}>Geo-Position</h4>&nbsp;&nbsp;<MDBIcon icon="info-circle" data-tip="Your geographical location is essential for getting events near you" aria-hidden="true" />
            <br />
            <div className="well form-horizontal">
              <div className="form-group">
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Address</span>
                    <input id="txt-geocode-address" type="text" className="form-control" placeholder="123 Street Name, City, Province" required value={addr} onChange={e => setAddr(e.target.value)} />
                  </div>
                  <div className="input-group">
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Department/Unit</span>
                    <input type="text" className="form-control" name="address_additional" id="txt-geocode-address-additional" placeholder="Unit 123" value={addr2} onChange={e => setAddr2(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button type="submit" name="Registration" id="register" className="registerButton">Submit</button>
          </form>
          <br />
          <br />
        </div>
      </div>
    </div>

  );
};

/*
          <InstantSearch indexName="instant_search" searchClient={searchClient} >
                        <SearchBox />
                        <Hits />
          </InstantSearch>
*/

export default Registration;