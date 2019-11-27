import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactTooltip from 'react-tooltip';
import './registration.css';
import { navigate } from '@reach/router';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import API from '../api';
import { toast } from 'react-toastify';
import cityTable from './cityTable.jsx';

const Registration = props => {

  const [userType, setUserType] = useState('none');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [preferName, setPreferName] = useState('');
  //const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('none');
  const [bdate, setBdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('none');
  const [unit, setUnit] = useState('');

  
  const check_user_type = option => {
    //console.log(option);
    setUserType(option);

    if (option === "debug") {
      generateFormData();
    }
  }

  const saveUser = () => {
    console.log(username, password);
    // TODO: save other user related info
    let resp = API.signup(username, password);
    //console.log(resp);
    return resp;
  }

  const validateSignUp = async (e) => {
    e.preventDefault();

    let res = await saveUser();
    //console.log(res);
    res.match(
      err => {
        console.log(err);
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER
        });
      },
      user => {
        toast.success('Registration successful: ' + user.username, {
          position: toast.POSITION.TOP_CENTER
        });
        console.log(user);
        navigate('/register/success');
      },
    );
  }

  const validatePwd = () => {
    if (password !== rePassword) {
      //alert("Your password does not match! Please re-enter your password.");
      toast.error("Your password does not match! Please re-enter your password.", {
        position: toast.POSITION.TOP_CENTER
      });
      setPassword('');
      setRePassword('');
      return false;
    }
  }

  function generatePassword() {
    var length = 12,
      charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      pwd = Math.floor(Math.random()*10) + charSet[Math.floor(Math.random()*51)];
    for (var i = 0, n = charSet.length; i < length; ++i) {
      pwd += charSet.charAt(Math.floor(Math.random() * n));
    }
    return pwd;
  }

  const genderValue = ['male', 'female', 'other'];

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
      "27 King's College Cir, Toronto, ON",
      "1265 Military Trail, Scarborough, ON",
      "3359 Mississauga Rd, Mississauga, ON",
      "300 Borough Dr, Toronto, ON",
      "1 Blue Jays Way, Toronto, ON"
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
    if (Math.random() > 0.5) {
      //setMiddleName(generateName());
      setPreferName(generateName());
    }
    setLastName(generateName());
    setGender(generateGender());
    setBdate(generateBDate());
    setPhone(generatePhoneNumber());
    setEmail('example' + Math.floor(Math.random() * 1234) + '@samaria.com');
    var addr = generateAddress().split(', ');
    setStreet(addr[0]);
    setCity(addr[1]);
    setProvince(addr[2]);
    //setAddr2();
  }


  const generateCityOptions = (province) => {
    var cities = cityTable[province];
    var constructOption = (city) => {
      return <option key={city} value={city}>{city}</option>
    }

  return cities.map(constructOption)

  }



  return (
    <div className='register-container'>
      <div id="page-content" className="row">
        <div className="menu-panel-first">
          <Form name="signup-form" id="signup-form" className="register-form" onSubmit={validateSignUp}>
            <h2 className='register-title'>Account Info</h2>
            <div className='register-header'>Generate Test Data
              <ReactTooltip place="right" />
              <MDBIcon className='register-icon' icon="info-circle" data-tip="Use this for quick registration with valid data" />
            </div>
            <Form.Row>
            <Form.Group as={Col} xs={3}>
              <Form.Label>Debug Only</Form.Label>
              <select id="user_type" className="form-control" value={userType} onChange={e => check_user_type(e.target.value)}>
                <option value='none' disabled hidden>Choose here</option>
                <option value="debug">This is for debugging only</option>
              </select>
            </Form.Group>
            </Form.Row>
            <div className='register-header'>Login Info</div>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <MDBIcon icon="asterisk" className="pointer text register-icon" 
              data-tip="Username must satisfy the following: (1) Contain alphanumeric characters only 
              (with the exception of underscore '_' and dashe '-' in between) (2) Start with a letter (3) With a length range from 3 to 15" />
              <input id="user_name" type="text" className="form-control" placeholder="Username" 
              required pattern="^[A-Za-z][A-Za-z0-9]*(?:[ _-][A-Za-z0-9]+)*$" minLength={3} maxLength={15} value={username} 
              onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <MDBIcon icon="asterisk" className="pointer text register-icon" 
              data-tip="Password must satisfy the following: (1) Be a minimum of 8 characters in length 
              (2) Contain at least one letter and one number" />
              <input id="password" type="password" className="form-control" placeholder="●●●●●●●●●●●●●●●●" 
              required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$" value={password} 
              onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Repeat Password</Form.Label>
                <MDBIcon icon="asterisk" className="pointer text register-icon" 
                data-tip="Type same password again" />
                <input type="password" className="form-control" placeholder="●●●●●●●●●●●●●●●●" name="re_password" id="re_password" value={rePassword} 
                onChange={e => setRePassword(e.target.value)} onBlur={validatePwd} />
            </Form.Group>
            <div className='register-header'>Personal Info
              <MDBIcon className='register-icon' icon="info-circle" data-tip="We respect your privacy and take protecting it seriously." aria-hidden="true"/>
            </div>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <MDBIcon icon="asterisk" className="pointer text register-icon" 
              data-tip="Your given name" />
                <input type="text" className="form-control" name="first_name" id="first_name" pattern="^[a-zA-Z]{1,64}$" 
                value={firstName} onChange={e => setFirstName(e.target.value)} required />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Preferred Name</Form.Label>
                <input type="text" className="form-control" name="prefer_name" id="prefer_name" pattern="^[a-zA-Z]{1,64}$" 
                value={preferName} onChange={e => setPreferName(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <MDBIcon icon="asterisk" className="pointer text register-icon" 
                data-tip="Your surname" />
                <input type="text" className="form-control" name="last_name" id="last_name" pattern="^[a-zA-Z]{1,64}$" 
                value={lastName} onChange={e => setLastName(e.target.value)} required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} xs={3}>
                <Form.Label>Gender</Form.Label>
                <select id="gender" className="form-control" value={gender} onChange={e => setGender(e.target.value)} >
                      <option value="none" disabled hidden>Choose here</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Birth Date</Form.Label>
                <input type="text" className="form-control" name="birth_date" id="birth_date" placeholder="MM-DD-YYYY" 
                pattern="^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$" value={bdate} onChange={e => setBdate(e.target.value)} />
              </Form.Group>
            </Form.Row>
            <div className='register-header'>Contact Info
              <MDBIcon className='register-icon' icon="info-circle" data-tip="We respect your privacy and take protecting it seriously." aria-hidden="true"/>
            </div>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <input type="text" className="form-control" name="phone_number" id="phone_number" placeholder="416-1234567" 
              pattern="^\d+-?\d+$" value={phone} onChange={e => setPhone(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <MDBIcon icon="asterisk" className="pointer text register-icon" 
              data-tip="This will be the default contact method (you can change it in the settings)" />
              <input type="email" className="form-control" name="email" id="email" 
              required pattern="^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" 
              value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <div className='register-header'>Location
              <MDBIcon icon="info-circle" className="pointer text register-icon" data-tip="We will never share your information without your permission" />
            </div>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Street</Form.Label>
                <input id="address-street" type="text" className="form-control" placeholder="123 Street Name" 
                value={street} onChange={e => setStreet(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} xs={3}>
              <Form.Label>City</Form.Label>
                <select id="address-city" className="form-control" placeholder="City" 
                value={city} onChange={e => setCity(e.target.value)}>
                  {generateCityOptions(province)}
                </select>
              </Form.Group>
              <Form.Group as={Col} xs={2}>
              <Form.Label>Province</Form.Label>
                <select id="province" className="form-control" value={province} onChange={e => setProvince(e.target.value)} >
                      <option value="none" disabled hidden>Province</option>
                      <option value="AB">Alberta</option>
                      <option value="BC">British Columbia</option>
                      <option value="MB">Manitoba</option>
                      <option value="NB">New Brunswick</option>
                      <option value="NL">Newfoundland and Labrador</option>
                      <option value="NS">Nova Scotia</option>
                      <option value="NT">Northwest Territories</option>
                      <option value="NU">Nunavut</option>
                      <option value="ON">Ontario</option>
                      <option value="PE">Prince Edward Island</option>
                      <option value="QC">Quebec</option>
                      <option value="SK">Saskatchewan</option>
                      <option value="YT">Yukon</option>
                    </select>
              </Form.Group>
              <Form.Group as={Col} xs={2}>
                <Form.Label>Department/Unit</Form.Label>
                <input type="text" className="form-control" name="address_additional" id="address-additional" placeholder="Unit 123" 
                value={unit} onChange={e => setUnit(e.target.value)} />
              </Form.Group>
            </Form.Row>
            <Button type="submit" name="Registration" id="register" variant='success' block>Submit</Button>
          </Form>
        </div>
      </div>
    </div>

  );
};

export default Registration;