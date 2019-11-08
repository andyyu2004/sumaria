//import 'jquery/dist/jquery.min.js';
//jquery.dataTables.css
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './AddEvent.css';
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactTooltip from 'react-tooltip';

const AddEvent = props => {

  const [eventName, setEventName] = useState('');
  const [organizers, setOrganizers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numV, setNumV] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription]= useState('');


  const handleSubmit = e => {
    e.preventDefault();
    var d = [eventName, organizers, startDate, endDate, numV, skills, description];
    console.log(d);
  }

  const invalidDateError = () => {
    alert('End date cannot be earlier than start date!');
  }

  const checkDate = () => {
    //startDate, endDate
    if (startDate && endDate){
      var s = startDate.split("-");
      var e = endDate.split("-");
      var sy = s[0], sm = s[1], sd = s[2];
      var ey = e[0], em = e[1], ed = e[2];
      if (sy > ey){
        invalidDateError();
      } else if (sy === ey){
        if (sm > em){
          invalidDateError();
        } else if (sm === em){
          if (sd > ed){
            invalidDateError();
          } else{
          }
        }
      }
    }
  }


  return (
    <div>
      <Card className='add-event-container'>
        <h1>Add Event</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control placeholder="Enter event name" value={eventName} onChange={e => setEventName(e.target.value)}  maxLength={64} required />
          </Form.Group>
          <Form.Group controlId="formOrganizers">
              <Form.Label>Organizers</Form.Label><ReactTooltip place="right" /><span className="symbol"><MDBIcon icon="question" className="pointer text qt" data-tip="Separate the organizers by comma" /></span>
              <Form.Control placeholder="Enter organizer name(s)" value={organizers} onChange={e => setOrganizers(e.target.value)} required />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} onBlur={checkDate} required />
            </Form.Group>
            <Form.Group as={Col} controlId="formEndDate">
                <Form.Label>End Date</Form.Label>
                <input type="date" className="form-control" value={endDate} onChange={e => setEndDate(e.target.value)} onBlur={checkDate} required />
            </Form.Group>
            <Form.Group as={Col} controlId="formVolunteerNum">
                <Form.Label>Number of Volunteers Needed</Form.Label>
                <input type="number" className="form-control" value={numV} onChange={e => setNumV(e.target.value)} />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formSkills">
              <Form.Label>Required Skills</Form.Label><span className="symbol"><MDBIcon icon="question" className="pointer text qt" data-tip="Separate the skills by comma" /></span>
              <Form.Control placeholder="Enter required skills" value={skills} onChange={e => setSkills(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formEventDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" value={description} onChange={e => setDescription(e.target.value)} maxLength={30001} />
          </Form.Group>
          <Button type="submit" size='lg' className='btn-success' block>
              Create Event
          </Button>
        </Form>
        </Card>
    </div>
  );
}

export default AddEvent;