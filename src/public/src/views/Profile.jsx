import React, { useState, useEffect } from 'react';
import { DisplayEvent } from '../components';
import { useSelector } from 'react-redux';
import API from '../api';
import { Left } from '../types/Either';
import './Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from 'react-toastify';
import cityTable from './cityTable.jsx';
import Form from 'react-bootstrap/Form';

const editIcon = { fontSize: "0.89rem", padding: "0", border: "none", background: "none" };

const Profile = props => {
  const errorUser = {
    "id": -1,
    "username": "Unknown",
    "description": "N/A",
    "password": "N/A",
    "email": "N/A",
    "type": "N/A",
    "events": [0]
  };

  const [firstName, setFirstName] = useState('');
  const [preferName, setPreferName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('none');
  const [bdate, setBdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('none');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');

  const [userInfo, setUserInfo] = useState(errorUser);
  const [userEvents, setUserEvents] = useState([]);
  const { username } = useSelector(state => state.user);

  async function fetchEvents() {
    const userEither = username ? await API.getUserByUsername(username) : new Left("");
    if (userEither.isLeft()) return console.log(`Failed to fetch user ${username}; err: ${userEither.err()}`);
    console.log("TEST Another " + username);


    const user = userEither.unwrap(); // Safely unwrap now that we know its a Right
    setUserInfo(user);
    console.log("UNWRAP " + user);
    console.log(user);

    /** Moved the brunt work into the API, as you want to retrieve every user and event etc on client side, let server and db do the hard stuff */
    //const mockTemp = [2, 3]; // Currently this is mock data for the events that the user is a part of.
    // const userEvents = await API.getEventsByIds(user.events); // Uncomment when user event enrollment is implemented.
    //const userEvents = await API.getEventsByIds(mockTemp);
    //userEvents.match(err => console.log(err), setUserEvents);
  }

  // Not sure of useEffect is needed. But it doesn't work with it.
  // If you don't use useEffect it gets run every render, potentially very inefficient
  // I the problem you were having is that the setState is not completely synchronous or something?
  useEffect(() => { fetchEvents(); }, []);

  const generateCityOptions = (province) => {
    var cities = cityTable[province];
    var constructOption = (city) => {
      return <option key={city} value={city}>{city}</option>
    }

    return cities.map(constructOption)

  }

  const displayError = (err) => {
    toast.error(err, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  const validateEditThenSave = (prop) => {
    // validate and save
    switch (prop) {
      case 'firstName':
        if (!/^[a-zA-Z]{1,64}$/.test(firstName)) {
          var err = 'Invalid First Name';
          displayError(err);
          return;
        }
        break;
      case 'lastName':
        if (!/^[a-zA-Z]{1,64}$/.test(lastName)) {
          var err = 'Invalid Last Name';
          displayError(err);
          return;
        }
        break;
      case 'preferName':
        if (!/^[a-zA-Z]{1,64}$/.test(preferName)) {
          var err = 'Invalid Prefer Name';
          displayError(err);
          return;
        }
        break;
      case 'phone':
        if (!/^\d+-?\d+$/.test(phone)) {
          var err = 'Invalid Phone Number';
          displayError(err);
          return;
        }
        break;
      case 'email':
        if (!/^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
          var err = 'Invalid Email';
          displayError(err);
          return;
        }
        break;
      case 'address':
        if (street && street.length > 200) {
          var err = 'Invalid Street (exceed max length)';
          displayError(err);
          return;
        }
        if (unit && unit.length > 20) {
          var err = 'Invalid Department/Unit (exceed max length)';
          displayError(err);
          return;
        }
        break;
      case 'birthDate':
        if (!/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/.test(bdate)) {
          var err = 'Invalid Birth Date';
          displayError(err);
          return;
        }
        break;
      default:
        // check for any non-standard characters
        break;
    }
    // TODO: save the modified info

    // if save succeed
    var msg = "Changes Saved";
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
    return true;
  }

  const editProfile = (prop) => {
    if (prop == 'address') {
      var inputStreet = document.getElementById('address-street');
      var inputCity = document.getElementById('address-city');
      var inputProvince = document.getElementById('province');
      var inputAdditional = document.getElementById("address-additional");
      if (inputStreet.disabled) {
        inputStreet.removeAttribute('disabled');
        inputCity.removeAttribute('disabled');
        inputProvince.removeAttribute('disabled');
        inputAdditional.removeAttribute('disabled');
        document.getElementById('i-' + prop).className = 'fas fa-check';
      } else {
        if (!validateEditThenSave(prop)) {
          return;
        }
        inputStreet.setAttribute('disabled', true);
        inputCity.setAttribute('disabled', true);
        inputProvince.setAttribute('disabled', true);
        inputAdditional.setAttribute('disabled', true);
        document.getElementById('i-' + prop).className = 'fas fa-pen fa-xs';
      }

    } else {
      var inputProp = document.getElementById(prop);
      if (inputProp.disabled) {
        inputProp.removeAttribute('disabled');
        document.getElementById('i-' + prop).className = 'fas fa-check';
      } else {
        if (!validateEditThenSave(prop)) {
          return;
        }
        inputProp.setAttribute('disabled', true);
        document.getElementById('i-' + prop).className = 'fas fa-pen fa-xs';
      }
    }
  }

  return (
    <div className='profile-outer'>
      <h2 className='profile-username'> Username: {userInfo["username"]}'s Profile <i className="fas fa-user"></i> </h2>
      <div className='profile-info'>
        <Row className='profile-rows'>
          <Col>
            <h5>First Name &nbsp;<button id='i-firstName' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('firstName') }}></button></h5>
            <input type="text" className="form-control" name="first_name" id="firstName" pattern="^[a-zA-Z]{1,64}$"
              value={firstName} onChange={e => setFirstName(e.target.value)} required disabled />
            {/* <div> {userInfo["lastName"]} </div> */}
          </Col>
          <Col>
            <h5>Last Name &nbsp;<button id='i-lastName' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('lastName') }}></button></h5>
            <input type="text" className="form-control" name="last_name" id="lastName" pattern="^[a-zA-Z]{1,64}$"
              value={lastName} onChange={e => setLastName(e.target.value)} required disabled />
            {/* <div> {userInfo["firstName"]} </div> */}
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Prefer Name &nbsp;<button id='i-preferName' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('preferName') }}></button></h5>
            <input type="text" className="form-control" name="prefer_name" id="preferName" pattern="^[a-zA-Z]{1,64}$"
              value={preferName} onChange={e => setPreferName(e.target.value)} disabled />
            {/* <div> {userInfo["preferName"]} </div> */}
          </Col>
          <Col>
            <h5>Gender &nbsp;<button id='i-gender' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('gender') }}></button></h5>
            <select id="gender" className="form-control" value={gender} onChange={e => setGender(e.target.value)} disabled >
              <option value="none" disabled hidden>Choose here</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* <div> {userInfo["gender"]} </div> */}
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Phone Number &nbsp;<button id='i-phone' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('phone') }}></button></h5>
            <input type="text" className="form-control" name="phone_number" id="phone" placeholder="416-1234567"
              pattern="^\d+-?\d+$" value={phone} onChange={e => setPhone(e.target.value)} disabled />
            {/* <div> {userInfo["phone"]} </div> */}
          </Col>
          <Col>
            <h5>Email &nbsp;<button id='i-email' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('email') }}></button></h5>
            <input type="email" className="form-control" name="email" id="email"
              required pattern="^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"
              value={email} onChange={e => setEmail(e.target.value)} disabled />
            {/* <div> {userInfo["email"]} </div> */}
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <h5>Address &nbsp;<button id='i-address' style={editIcon} className="fas fa-pen fa-xs" onClick={() => { editProfile('address') }}></button></h5>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Street</Form.Label>
            <input id="address-street" type="text" className="form-control" placeholder="123 Street Name"
              value={street} onChange={e => setStreet(e.target.value)} disabled />
          </Form.Group>
          <Form.Group as={Col} xs={3}>
            <Form.Label>City</Form.Label>
            <select id="address-city" className="form-control" placeholder="City"
              value={city} onChange={e => setCity(e.target.value)} disabled>
              {generateCityOptions(province)}
            </select>
          </Form.Group>
          <Form.Group as={Col} xs={2}>
            <Form.Label>Province</Form.Label>
            <select id="province" className="form-control" value={province} onChange={e => setProvince(e.target.value)} disabled >
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
              value={unit} onChange={e => setUnit(e.target.value)} disabled />
          </Form.Group>
        </Form.Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Birth Date &nbsp;<button id='i-birthDate' style={editIcon} class="fas fa-pen fa-xs" onClick={() => { editProfile('birthDate') }}></button></h5>
            <input type="text" className="form-control" name="birth_date" id="birthDate" placeholder="MM-DD-YYYY"
              pattern="^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$" value={bdate} onChange={e => setBdate(e.target.value)} disabled />
            {/* <div> {userInfo["birthDate"]} </div> */}
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Description &nbsp;<button id='i-description' style={editIcon} class="fas fa-pen fa-xs" onClick={() => { editProfile('description') }}></button></h5>
            <textarea style={{ width: '100%', height: '100px' }} id='description' placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} maxLength={512} disabled />
          </Col>
        </Row>
        {/* <div> {userInfo["description"]} </div> */}
        <Row className='row-spacer'>
        </Row>
        <h4>Your Upcoming Events</h4>
        <ul className='profile-event-container'>
          {userEvents.length
            ? userEvents.map(event => <DisplayEvent key={event.id} event={event} />)
            : <h6>No upcoming events</h6>}
        </ul>
      </div>
    </div>
  );
};

export default Profile;