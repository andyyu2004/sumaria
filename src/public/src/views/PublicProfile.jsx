import React, { useState, useEffect, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import API from '../api';
import './Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from 'react-toastify';



const PublicProfile = props => {
  const { username } = props;
  const [user, setUser] = useState({});

  const getUser = useCallback(async () => {
    (await API.getUserByUsername(username))
      .map(setUser)
      .mapLeft(toast.error)
  }, []);

  useEffect(() => { getUser(); }, [getUser]);

  
  return (
    <div className='profile-outer'>
      <h2 className='profile-username'> Username: {username}'s Profile <i className="fas fa-user"></i> </h2>
      <div className='profile-info'>
        <Row className='profile-rows'>
          <Col>
            <h5>First Name</h5>
            <input type="text" className="form-control" name="first_name" id="firstName" value={user.firstname} readonly />
          </Col>
          <Col>
            <h5>Last Name</h5>
            <input type="text" className="form-control" name="last_name" id="lastName" value={user.lastname} readonly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Prefer Name</h5>
            <input type="text" className="form-control" name="prefer_name" id="preferName" value={user.prefername} readonly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Email</h5>
            <input type="email" className="form-control" name="email" id="email" value={user.email} readonly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Description</h5>
            <textarea style={{ width: '100%', height: '100px' }} id='description' placeholder="Description" value={user.description} readonly />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PublicProfile;