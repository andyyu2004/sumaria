import React, { useState, useEffect, useCallback } from 'react';
//import { useDispatch } from 'react-redux';
import API from '../api';
import './Profile.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { toast } from 'react-toastify';
import { navigate } from "@reach/router";
import ReactTooltip from 'react-tooltip';


const PublicProfile = props => {
  const { username } = props;
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [preferName, setPreferName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const getUser = useCallback(async () => {
    (await API.getUserByUsername(username))
      .map(user => {
        setFirstName(user.firstname);
        setLastName(user.lastname);
        setPreferName(user.prefername);
        setEmail(user.email);
        setDescription(user.description);
        if (username === user.username) {
          setIsMyProfile(true);
        }
      })
      .mapLeft(msg => {
        toast.error(msg);
        navigate('404');
        return null;
      })
  }, [username]);

  useEffect(() => { getUser(); }, [getUser]);

  const privateProfile = () => navigate(`/profile`);

  return (
    <div className='profile-outer'>
      <ReactTooltip place="right" />
      <h2 className='profile-username'> Username: {username}'s Profile {isMyProfile ? <i data-tip="Edit my profile" style={{ cursor: 'pointer' }} className="far fa-user" onClick={() => privateProfile()}></i> : <i className="fas fa-user"></i>} </h2>
      <div className='profile-info'>
        <Row className='profile-rows'>
          <Col>
            <h5>First Name</h5>
            <input type="text" className="form-control" name="first_name" id="firstName" value={firstName} readOnly />
          </Col>
          <Col>
            <h5>Last Name</h5>
            <input type="text" className="form-control" name="last_name" id="lastName" value={lastName} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Prefer Name</h5>
            <input type="text" className="form-control" name="prefer_name" id="preferName" value={preferName} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Email</h5>
            <input type="email" className="form-control" name="email" id="email" value={email} readOnly />
          </Col>
        </Row>
        <Row className='row-spacer'>
        </Row>
        <Row className='profile-rows'>
          <Col>
            <h5>Description</h5>
            <textarea style={{ width: '100%', height: '100px' }} id='description' placeholder="Description" value={description} readOnly />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PublicProfile;