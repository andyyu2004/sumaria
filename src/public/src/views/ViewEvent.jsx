import React from 'react'
import { withProtection } from '../components/hoc';
import { useUser } from '../hooks/useUser';
import { uploadFileForEvent } from '../api/files';
import { toast } from 'react-toastify';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './viewEvent.css';

/** Component for viewing a specific event in detail */
const ViewEvent = props => {
  const { event } = props.location.state;
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
    // API.registerEvent(eventId or eventName, user.username or id)
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
      <Row>
      <Col><h4>{name}</h4></Col>
      </Row>
      {/* Just temporary debugging displays */}
      <Row>
      <Col><h5>organizer: {creatorid}</h5></Col>
      </Row>
      <h5>me: {user._id}</h5>
      <ul>
        <Row>
          <Col>Event Start Date: {new Date(date).toString()}</Col>
        </Row>
        <Row>
          <Col>Event End Date: {new Date(endDate).toString()}</Col>
        </Row>
        <Row>
          <Col>Posted Date: {new Date(postDate).toString()}</Col>
        </Row>
        <Row>
          <Col>Organizer: {organizer}</Col>
        </Row>
        <Row>
          <Col>Address: {address}</Col>
        </Row>
        <Row>
          <Col>City: {city}</Col>
        </Row>
        <Row>
          <Col>Province: {province}</Col>
        </Row>
        <Row>
          <Col>Unit: {unit}</Col>
        </Row>
        Skills Required:
          <Row>
          <Col>
            <ul>
              {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>Description: {description}</Col>
        </Row>
      </ul>
      <br/>
      {checkRegistered()}
      {/* Show button to add event file if the user is the creator of the event */}
      {/* /api/event/event_id/file/file_id */}
      {creatorid === user._id && <input type="file" onChange={uploadFile} multiple />}
    </div>
  );
};

export default withProtection(ViewEvent);
