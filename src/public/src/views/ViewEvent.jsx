import React, { useState, useEffect, useCallback } from 'react'
import { withProtection } from '../components/hoc';
import { useUser } from '../hooks/useUser';
import { uploadFileForEvent } from '../api/files';
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './viewEvent.css';
import API from '../api';
import { navigate } from '@reach/router';


/* Component for viewing a specific event in detail */
const ViewEvent = props => {

  const [event, setEvent] = useState({});

  const fetchEvent = useCallback(async () => {
    (await API.getEventById(props.eventId))
      .map(setEvent)
      .mapLeft(_ => navigate('/404'))
  }, [props.eventId]);

  useEffect(() => { fetchEvent() }, [fetchEvent]);

  const { _id, creatorid, date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;

  const user = useUser();

  const uploadFile = async e => {
    const { files } = e.target;
    console.log(Array.from(files));
    (await uploadFileForEvent(_id, Array.from(files)))
      .map(x => {
        console.log('file', x);
        toast.success("succesfully uploaded files")
      })
      .mapLeft(toast.error);
  };

  const registerEvent = () => {
    // await API.registerEvent(eventId or eventName, user.username or id)
    toast.success('Event Registered Successfully: ' + name, {
      position: toast.POSITION.TOP_CENTER
    });
  }

  const checkRegistered = () => {
    // check if user already registered this event
    // if not
    return (<Button onClick={() => registerEvent()}>Register</Button>);
  }

  return (
    <div className="event-container">
      <div className="event-details-container">
      <Row>
        <Col><h4>{name}</h4></Col>
        <Col xs='auto'>Posted Date: {new Date(postDate).toDateString()}</Col>
      </Row>
      {/* Just temporary debugging displays */}
      <Row>
        <Col><h5>Organizer: {creatorid}</h5></Col>
      </Row>
      <h5>me: {user._id}</h5>
      <ul>
        <Row>
          <Col>Event Start Date: {new Date(date).toLocaleString()}</Col>
          <Col>Event End Date: {new Date(endDate).toLocaleString()}</Col>
        </Row>
        <Row>
          <Col>Organizer: {organizer}</Col>
        </Row>
        <Row noGutters={true}>
          <Col xs='auto'>Location: {address + (unit ? ' ' + unit : '') + (city ? ', ' + city : '') + (province ? ', ' + province: '')}</Col>
        </Row>
        Skills Required:
          <Row>
          <Col>
            <ul>
              {skills ? skills.map(skill => <li key={skill}>{skill}</li>) : null}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>Description: {<div className='event-description'> {description} </div>}</Col>
        </Row>
      </ul>
      <br />
      {/* Show button to add event file if the user is the creator of the event */}
      {/* /api/event/event_id/file/file_id */}
      {checkRegistered()}
      {creatorid === user._id && <input type="file" onChange={uploadFile} multiple className='event-file-upload'/>}
    </div>
  </div>
  );
};

export default withProtection(ViewEvent);