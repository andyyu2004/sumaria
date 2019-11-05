import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactTooltip from 'react-tooltip';
import './registration.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';
//import { navigate } from '@reach/router';

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
  "margin": "20px",
  "justifyContent": "center",
  "alignItems": "center"
}

const ResetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}



const Registration = props => {

  return (
    <div style={registerContainer}>
      <div id="page-content" className="row">
        <div className="menu-panel-first">
          <h2>Create Account</h2>
          <br />
          <form name="signup-form" id="signup-form" className="signup-form">
            <h3 style={{ display: 'inline' }}>Account Info</h3>&nbsp;&nbsp;<ReactTooltip /><MDBIcon icon="info-circle" data-tip="You will have different access rights depend on your user type." />
            <div className="well form-horizontal">
              <div className="form-group">
                <div className="col-sm-7">
                  <MDBIcon icon="asterisk" className="oi oi-question-mark pointer text-warning asterisk-label-inside" data-tip="This cannot be changed after registration. You have to submit a request if you wish to change this." />
                  <div className="input-group">
                    <span className="input-group-addon mw-170">User Type</span>
                    <select id="user_type" className="form-control" required onchange="check_user_type(this.options[this.selectedIndex].value)">
                      <option value selected disabled hidden>Choose here</option>
                      <option value="regular">Regular</option>
                      <option value="staff">Staff</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="input-group" id="org_name_div">
                    <span className="input-group-addon mw-170">Organization Name</span>
                    <input type="text" className="form-control" name="organization_name" id="organization_name" pattern="^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{1,64}$" />
                  </div>
                  <div className="input-group" id="auth_key_div">
                    <span className="input-group-addon mw-170">Authetication Key</span>
                    <input type="text" className="form-control" name="auth_key" id="auth_key" pattern="^[a-zA-Z0-9]{32}$" />
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
                    <input id="user_name" type="text" className="form-control" placeholder="username" defaultValue required pattern="^[A-Za-z][A-Za-z0-9]*(?:[ _-][A-Za-z0-9]+)*$" minLength={3} maxLength={15} />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Sumaria Key</span>
                    <input id="password" type="password" className="form-control" placeholder="●●●●●●●●●●●●●●●●" defaultValue required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Repeat Key</span>
                    <input type="password" className="form-control" name="re_password" id="re_password" />
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
                    <input type="text" className="form-control" name="first_name" id="first_name" pattern="^[a-zA-Z]{1,64}$" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Last Name</span>
                    <input type="text" className="form-control" name="last_name" id="last_name" pattern="^[a-zA-Z]{1,64}$" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Gender</span>
                    <select id="gender" className="form-control" required>
                      <option value selected disabled hidden>Choose here</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="unspecified">Prefer Not to Answer</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Birth Date</span>
                    <input type="text" className="form-control" name="birth_date" id="birth_date" placeholder="MM-DD-YYYY" pattern="^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Phone Number</span>
                    <input type="text" className="form-control" name="phone_number" id="phone_number" placeholder="416-1234567" pattern="^\d+-?\d+$" />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Email</span>
                    <input type="email" className="form-control" name="email" id="email" required pattern="^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$" />
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
                    <span className="input-group-addon mw-170">Latitude:</span>
                    <input name="latitudeAuto" id="txt-html5-la" type="text" className="form-control w-150" placeholder={0.000000} defaultValue disabled />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon mw-170">Longitude:</span>
                    <input name="longitudeAuto" id="txt-html5-lo" type="text" className="form-control w-150" placeholder={0.000000} defaultValue disabled />
                  </div>
                </div>
                  <div className="col-sm-7">
                    <div className="input-group">
                      <span className="input-group-addon mw-170">Address</span>
                      <input id="txt-geocode-address" type="text" className="form-control" placeholder="27 King's College Cir, Toronto, Ontario" defaultValue="1265 Military Trail, Scarborough, Ontario" required />
                    </div>
                    <div className="input-group">
                      <span className="input-group-addon mw-170">Department/Unit</span>
                      <input type="text" className="form-control" name="address_additional" id="txt-geocode-address-additional" placeholder="Unit 123" />
                    </div>
                </div>
              </div>
            </div>
            <br />
            <button type="submit" name="Registration" id="register" className="register">Submit</button>
          </form>
          <br />
          <br />
        </div>
      </div>
    </div>

  );
};

export default Registration;