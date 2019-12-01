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
  const { eventId } = props;

  const [event, setEvent] = useState({});
  const [files, setFiles] = useState([]);
  console.log(files);

  const fetchEvent = useCallback(async () => {
    (await API.getEventById(eventId))
      .map(setEvent)
      .mapLeft(_ => navigate('/404'))
  }, [eventId]);

  const fetchFiles = useCallback(async () => {
    (await API.getEventFileIds(eventId))
      .map(setFiles)
      .mapLeft(() => toast.error("Failed to fetch files for event"));
  }, [eventId]);

  useEffect(() => { 
    fetchEvent();
    fetchFiles();
  }, [fetchEvent]);

  const { _id, creatorid, date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;

  const user = useUser();

  const uploadFile = async e => {
    const { files } = e.target;
    (await uploadFileForEvent(_id, Array.from(files)))
      .map(x => toast.success("succesfully uploaded files"))
      .mapLeft(toast.error);
  };

  const registerEvent = async () => {
    (await API.registerForEvent(eventId))
      .map(toast.success)
      .mapLeft(toast.error);
  }

  const checkRegistered = () => {
    // check if user already registered this event
    // if not
    return (<Button onClick={() => registerEvent()}>Register</Button>);
  }

  const downloadFile = async fid => {
    (await API.downloadFile(eventId, fid))
      .map(toast.success)
      .mapLeft(toast.error);
  };

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
          <Col xs='auto'>Location: {address}</Col>
          <Col xs='auto' className='event-fix-spacing'>{unit ? ' ' + unit : ''}</Col>
          <Col xs='auto'>{city ? ', ' + city : ''}</Col>
          <Col xs='auto'>{province ? ', ' + province: ''}</Col>
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
      {checkRegistered()}
      {files.map(f => <div key={f._id} onClick={() => downloadFile(f._id)}>{f.file.name}</div>)}
      {/* Show button to add event file if the user is the creator of the event */}
      {/* /api/event/event_id/file/file_id */}
      {creatorid === user._id && <input type="file" onChange={uploadFile} multiple />}
    </div>
  </div>
  );
};

export default withProtection(ViewEvent);