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
import "@fortawesome/fontawesome-free/css/all.min.css";


/* Component for viewing a specific event in detail */
const ViewEvent = props => {
  const { eventId } = props;
  const [registeredParticipants, setRegisteredParticipants] = useState([]);
  const [event, setEvent] = useState({});
  const [files, setFiles] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

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
  }, [fetchEvent, fetchFiles]);

  const { numVolunteers, _id, creatorid, date, description, name, postDate, endDate, skills, address, city, province, unit, organizer } = event;

  const user = useUser();

  /*
  const [registeredNum, setRegisteredNum] = useState(registeredParticipants.length);
  const [waitlistNum, setWaitlistNum] = useState(0);
  const [waitlisted, setWaitlisted] = useState(false);
  */
  
  let registeredNum = registeredParticipants.length;
  let waitlistNum = 0;
  let waitlisted = false;
  let overflow;
  let waitlistStart = false;
  
  if (registeredNum >= numVolunteers){
    waitlisted = true;
    if (registeredNum > numVolunteers){
      waitlistStart = true;
    }
    registeredNum = numVolunteers;
    waitlistNum = registeredNum - numVolunteers;
  }



  const isCreator = creatorid === user._id;

  const uploadFile = async e => {
    const { files } = e.target;
    (await uploadFileForEvent(_id, Array.from(files)))
      .map(x => toast.success("succesfully uploaded files"))
      .mapLeft(toast.error);
  };

  const registerEvent = async () => {
    (await API.registerForEvent(eventId))
      .map( msg => {
        toast.success(msg);
        setIsRegistered(true);
        return null;
      })
      .mapLeft(toast.error);
  }

  const cancelEventRegistration = async () => {
    (await API.cancelEventRegistration(eventId))
    .map( msg => {
      toast.success(msg);
      setIsRegistered(false);
      return null;
    })
    .mapLeft(toast.error);
  }

  const publicProfile = userName => {
    navigate(`/profile/${userName}/public`);
  }

  const checkIsUserRegistered = useCallback(participants => {
    //console.log(participants);
    setRegisteredParticipants(participants);
    let userRegisterIndex = participants.findIndex(x => x._id === user._id);
    if (userRegisterIndex >= 0 && !isRegistered) {
      setIsRegistered(userRegisterIndex + 1);
    }
  }, [isRegistered, user._id]);

  const checkRegistered = useCallback(async () => {
    // check if user already registered this event
    (await API.getEventParticipantsByEventId(eventId))
    .map(participants => checkIsUserRegistered(participants))
    .mapLeft(toast.error);
  }, [checkIsUserRegistered, eventId]);

  useEffect(() => { checkRegistered(); }, [checkRegistered]);

  return (
    <div className="event-container">
      <div className="event-details-container">
      <Row>
        <Col><h4>{name}</h4></Col>
        <Col xs='auto'>Posted Date: {new Date(postDate).toLocaleString()}</Col>
      </Row>
      <hr className='event-hr'/>
      {/* Just temporary debugging displays */}
      <Row>
        <Col><h5>organizer: {creatorid}</h5></Col>
      </Row>
      <h5>me: {user._id}</h5>
      <ul>
        <Row>
          <Col>Event Date: {new Date(date).toLocaleString() + ' - ' + new Date(endDate).toLocaleString()}</Col>
        </Row>
        <Row>
          <Col>Organizer: {organizer}</Col>
        </Row>
        <Row noGutters={true}>
          <Col xs='auto'>Location: {address + (unit ? ' ' + unit : '') + (city ? ', ' + city : '') + (province ? ', ' + province: '')}</Col>
        </Row>
        <Row>
          <Col>
            Skills Required:
            <ul>
              {skills ? skills.map(skill => <li key={skill}>{skill}</li>) : null}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>Description: {description}</Col>
        </Row>
      </ul>
      <br />
      {/* {files.map(f => <div key={f._id} onClick={() => downloadFile(f._id)}>{f.file.name}</div>)} */}
      {files.map(f => <div key={f._Id}><a href={`/api/event/${eventId}/file/${f._id}`}>{f.file.name}</a><br /></div>)}
      {isCreator && <input type="file" onChange={uploadFile} multiple />}
      { isRegistered ? <Button style={{float: 'right'}} onClick={() => cancelEventRegistration()}>{(isRegistered - numVolunteers) ? 'Cencel Waitlist' : 'Cancel'}</Button> : <Button style={{float: 'right'}} onClick={() => registerEvent()}>{waitlisted ? 'Waitlist' : 'Register'}</Button>}
      {/* Show button to add event file if the user is the creator of the event */}
      <br/><br/><br/>
      {<h3>{waitlistStart ? registeredParticipants.length - numVolunteers : registeredParticipants.length}/{numVolunteers} Participants {waitlisted ? '(' + (registeredParticipants.length - numVolunteers) + ' Waitlisted)' : null}</h3>}
      <ol type="1">
      {isCreator ? (registeredParticipants.map(p => <li key={p._id}>{p.firstname + ' ' + p.lastname}<i style={{marginLeft: '5px', cursor: 'pointer'}} className="fas fa-user" onClick={()=>publicProfile(p.username)}></i><br /></li>)) : null}
      </ol>
    </div>
  </div>
  );
};

export default withProtection(ViewEvent);