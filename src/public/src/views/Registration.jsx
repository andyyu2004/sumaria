import React from 'react'
//import { navigate } from '@reach/router';

const registerContainer = {
  "width": "100%",
  "minHeight": "100vh",
  "display": "flex",
  "flexWrap": "wrap",
  "justifyContent": "center",
  "alignItems": "center",
  "padding": "15px",
  "background": "linear-gradient(115deg, #ffac81 0%, #ff928b 74%)"
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
  margin: "20px",
  justifyContent: "center",
  alignItems: "center"
}

const ResetText = {
  "fontFamily": "Arial",
  "fontSize": "13.5px",
  "lineHeight": "1",
}



const Registration = props => {

  return (
<div>
  <div style={registerContainer}>
    <div className="container-head">
      <br />
      <h2 style={{display: 'inline', textAlign: 'center'}}>Create Account</h2>
      <br />
      <br />
    </div>
    <div id="page-content" className="row">
      <div className="menu-panel-first">
        <form name="signup-form" id="signup-form" className="signup-form">
          <h3 style={{display: 'inline'}}>Account Info</h3>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="You will have different access rights depend on your user type." aria-hidden="true" />
          <div className="well form-horizontal">
            <div className="form-group">
              <div className="col-sm-7">
                <span className="glyphicon glyphicon-asterisk pointer text-warning asterisk-label-inside" data-toggle="tooltip" title="This cannot be changed after registration. You have to submit a request if you wish to change this." aria-hidden="true" />
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
          <h3 style={{display: 'inline'}}>Login Info</h3>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="Mainly used for login" aria-hidden="true" />
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
          <h3 style={{display: 'inline'}}>Basic Info</h3>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="We respect your privacy and take protecting it seriously" aria-hidden="true" />
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
        </form></div>
    </div>
    <h3 style={{display: 'inline'}}>Geo-Location</h3>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="This helps us find events near you" aria-hidden="true" />
    <br />
    <div id="btn-menu" className="btn-group nowrap" data-toggle="buttons">
      <label className="btn btn-primary btn-sm active" data-api="locate" data-caption="Locate">
        <input type="radio" name="geo-menu1" id="geo-option1" autoComplete="off" defaultChecked /> Locate
      </label>
      <label className="btn btn-primary btn-sm" data-api="geocode" data-caption="Geocode">
        <input type="radio" name="geo-menu2" id="geo-option2" autoComplete="off" /> Addr
      </label>
      <label className="btn btn-primary btn-sm" data-api="calcDistance" data-caption="Calculate Distance">
        <input type="radio" name="geo-menu3" id="geo-option3" autoComplete="off" /> Distance
      </label>
    </div>
    <div className="menu-content">
      <div className="menu-panel hidden active" id="panel-locate">
        <h4 style={{display: 'inline'}}>Geo-Position</h4>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="Press Locate to obtain your geographical coordinates, or flip to addr tab" aria-hidden="true" />
        <br />
        <div className="well form-horizontal">
          <div className="form-group">
            <div className="col-sm-7">
              <form name="locationForm" action="/submited" onsubmit="validateFormInput(); return false;" method="post">
                <div className="input-group">
                  <span className="input-group-addon mw-170">Latitude:</span>
                  <input name="latitudeAuto" id="txt-html5-la" type="text" className="form-control w-150" placeholder={0.000000} defaultValue disabled />
                </div>
                <div className="input-group">
                  <span className="input-group-addon mw-170">Longitude:</span>
                  <input name="longitudeAuto" id="txt-html5-lo" type="text" className="form-control w-150" placeholder={0.000000} defaultValue disabled />
                </div>
                <div className="input-group">
                  <span className="input-group-addon mw-170">Address:</span>
                  <input name="addressAuto" id="txt_html5_addr" type="text" className="form-control" placeholder="123 Street Name, City, Province" defaultValue required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-panel hidden" id="panel-geocode">
        <h4 style={{display: 'inline'}}>Geocoding</h4>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="Get geographic coordinates from an address" aria-hidden="true" />
        <br />
        <div className="well form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <div className="input-group">
                <span className="input-group-addon mw-160">Address</span>
                <input id="txt-geocode-address" type="text" className="form-control" placeholder="27 King's College Cir, Toronto, Ontario" defaultValue="1265 Military Trail, Scarborough, Ontario" />
              </div>
              <div className="input-group">
                <span className="input-group-addon mw-160">Department/Unit</span>
                <input type="text" className="form-control" name="address_additional" id="txt-geocode-address-additional" placeholder="Unit 123" />
              </div>
              <div className="input-group">
                <span className="input-group-addon mw-160">Create Map</span>
                <input id="chk-geocode-map" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-panel hidden" id="panel-calcDistance">
        <h4 style={{display: 'inline'}}>Distance Calculation</h4>&nbsp;&nbsp;<span className="glyphicon glyphicon-info-sign text-primary" data-toggle="tooltip" title="Calculate distance between two geolocations" aria-hidden="true" />
        <br />
        <div className="well form-horizontal">
          <div className="form-group">
            <div className="col-sm-6">
              <div className="input-group">
                <span className="input-group-addon mw-100">From</span>
                <select id="cmb-distance-places-a" className="form-control">
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-addon mw-100">To</span>
                <select id="cmb-distance-places-b" className="form-control">
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-addon mw-160">Distance (km)</span>
                <input id="cmb-distance-result" type="text" className="form-control" placeholder={0} defaultValue disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exec-bg">
        <button id="btn-exec" type="button" className="btn btn-info btn-block">Locate (HTML5)</button>
      </div>
    </div>
  </div>
  <br />
  <form method="post" action="/register/success" onsubmit="getAllFormData(); return false;">
    <button type="submit" name="Registration" id="register" className="register">Submit</button>
  </form>
  <br />
  <br />
  <div id="footer">
    <div id="footer-inner">
      <table>
        <tbody><tr>
            <td>Sumaria - Copyright © 2019 &nbsp;&nbsp; MIT License.</td>
          </tr>
        </tbody></table>
    </div>
  </div>
</div>

  );
};

export default Registration;