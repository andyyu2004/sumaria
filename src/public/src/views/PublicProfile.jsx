import React, { useState, useEffect, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import API from '../api';
import './Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from 'react-toastify';
import { navigate } from "@reach/router";


const PublicProfile = props => {
  const { username } = props;
  const [user, setUser] = useState({});
  const [isMyProfile, setIsMyProfile] = useState(false);

  const getUser = useCallback(async () => {
    (await API.getUserByUsername(username))
      .map( user => {
        setUser(user);
        if (username === user.username){
          setIsMyProfile(true);
        }
      })
      .mapLeft( msg => {
        toast.error(msg);
        navigate('404');
        return null;
      })
  }, [username]);

  useEffect(() => { getUser(); }, [getUser]);

  const privateProfile = () => navigate(`/profile`);
  
  return (
    <div className='profile-outer'>
<h2 className='profile-username'> Username: {username}'s Profile { isMyProfile ? <i style={{cursor: 'pointer'}} className="far fa-user" onClick={()=>privateProfile()}></i> : <i className="fas fa-user"></i>} </h2>
      <div className='profile-info'>
        <Row className='profile-rows'>
          <Col>
            <h5>First Name</h5>
            <input type="text" className="form-control" name="first_name" id="firstName" value={user.firstname} readOnly />
          </Col>
          <Col>
            <h5>Last Name</h5>
            <input type="text" className="form-control" name="last_name" id="lastName" value={user.lastname} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Prefer Name</h5>
            <input type="text" className="form-control" name="prefer_name" id="preferName" value={user.prefername} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Email</h5>
            <input type="email" className="form-control" name="email" id="email" value={user.email} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Description</h5>
            <textarea style={{ width: '100%', height: '100px' }} id='description' placeholder="Description" value={user.description} readOnly />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PublicProfile;