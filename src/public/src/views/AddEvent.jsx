//import 'jquery/dist/jquery.min.js';
//jquery.dataTables.css
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { MDBIcon } from "mdbreact";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ReactTooltip from 'react-tooltip';
import './AddEvent.css';
import API from "../api";
import { toast } from 'react-toastify';


const AddEvent = props => {

  const [eventName, setEventName] = useState('');
  const [organizers, setOrganizers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numV, setNumV] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription]= useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    const event = {
      name: eventName,
      date: startDate,
      enddate: endDate,
      skills: skills.split(",").map(s => s.trim()),
      description,
      numVolunteers: parseInt(numV),
    };
    // console.log(event);
    const res = await API.addEvent(event);
    res.match(
      err => {
        console.log(err);
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER
        });
      },
      event => {
        console.log(`Successfully added event: returned event = ${event}`);
        toast.success("Successfully added event: " + event, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    );
    
  };

  const checkDate = () => {
    //startDate, endDate
    if (startDate && endDate){
      var s = startDate.split("-");
      var e = endDate.split("-");
      var sy = s[0], sm = s[1], sd = s[2];
      var ey = e[0], em = e[1], ed = e[2];
      if (sy > ey && sm > em && sd < ed) {
        //alert('End date cannot be earlier than start date!');
        toast.error('End date cannot be earlier than start date!', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };


  return (
    <div className='add-event-outer'>
      <Form className='add-event-container' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='add-event-title'>Add Event</h2>
          <Form.Group controlId="formEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control placeholder="Enter event name" value={eventName} onChange={e => setEventName(e.target.value)}  maxLength={64} required />
          </Form.Group>
          <Form.Group controlId="formOrganizers">
            <Form.Label>Organizers</Form.Label><ReactTooltip place="right" /><span className="symbol"><MDBIcon icon="question" className="pointer text qt" data-tip="Separate the organizers by comma" /></span>
            <Form.Control placeholder="Enter organizer name(s) (I think the way Cameron's designed it, we just use the person who submits it as the sole organiser)" value={organizers} onChange={e => setOrganizers(e.target.value)} />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formStartDate">
              <Form.Label>Start Date</Form.Label>
              <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} onBlur={checkDate} required />
            </Form.Group>
            <Form.Group as={Col} controlId="formEndDate">
              <Form.Label>End Date</Form.Label>
              <input type="date" className="form-control" value={endDate} onChange={e => setEndDate(e.target.value)} onBlur={checkDate} />
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
    </div>
  );
};

export default AddEvent;