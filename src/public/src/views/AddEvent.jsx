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
import { withProtection } from "../components/hoc";
import cityTable from './cityTable.jsx';


const AddEvent = props => {

  const [eventName, setEventName] = useState('');
  //const [eventAddress, setAddress] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [numV, setNumV] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const organizer = "randomname";
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('none');
  const [unit, setUnit] = useState('');
  const [orgName, setOrgName] = useState('');


  const handleSubmit = async e => {
    e.preventDefault();
    const event = {
      name: eventName,
      organizer: orgName,
      date: startDate,
      enddate: endDate,
      address: street,
      skills: skills.split(",").map(s => s.trim()),
      city: city,
      province: province,
      description: description,
      unit: unit,
      numVolunteers: parseInt(numV),
    };
    const res = await API.addEvent(event);
    console.log(event);
    res.match(
      err => {
        console.log(err);
        toast.error(err, {
          position: toast.POSITION.TOP_CENTER
        });
      },
      event => {
        console.log(`Successfully added event: returned event = ${event.name}`);
        toast.success("Successfully added event: " + event.name, {
          position: toast.POSITION.TOP_CENTER
        });
      }
    );

  };

  const checkDate = () => {
    //startDate, endDate
    if (startDate && endDate) {
      var s = startDate.split("-");
      var e = endDate.split("-");
      var sy = s[0], sm = s[1], sd = s[2];
      var ey = e[0], em = e[1], ed = e[2];
      if (sy > ey || (sy == ey && sm > em) || (sy == ey && sm == em && sd > ed)) {
        //alert('End date cannot be earlier than start date!');
        toast.error('End date cannot be earlier than start date!', {
          position: toast.POSITION.TOP_CENTER
        });
      }
    }
  };

  const generateCityOptions = (province) => {
    var cities = cityTable[province];
    var constructOption = (city) => {
      return <option key={city} value={city}>{city}</option>
    }

    return cities.map(constructOption)

  }

  // console.log(event);

  return (
    <div className='add-event-outer'>
      <ReactTooltip place="right" />
      <Form className='add-event-container' onSubmit={(e) => handleSubmit(e)}>
        <h2 className='add-event-title'>Add Event</h2>
        <Form.Row>
          <Form.Group controlId="formEventName" as={Col} xs={8}>
            <Form.Label>Event Name</Form.Label>
            <Form.Control placeholder="Enter event name" value={eventName} onChange={e => setEventName(e.target.value)} maxLength={64} required />
          </Form.Group>
          <Form.Group controlId="formOrgName" as={Col} xs={4}>
            <Form.Label>Organization Name</Form.Label>
            <Form.Control placeholder="Enter organization name" value={orgName} onChange={e => setOrgName(e.target.value)} maxLength={64} required />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Street (Event Location)</Form.Label>
            <input id="address-street" type="text" className="form-control" placeholder="123 Street Name"
              value={street} onChange={e => setStreet(e.target.value)} />
          </Form.Group>
          <Form.Group as={Col} xs={3}>
            <Form.Label>City</Form.Label>
            <select id="address-city" className="form-control" placeholder="City"
              value={city} onChange={e => setCity(e.target.value)}>
              {generateCityOptions(province)}
            </select>
          </Form.Group>
          <Form.Group as={Col} xs={2}>
            <Form.Label>Province</Form.Label>
            <select id="province" className="form-control" value={province} onChange={e => setProvince(e.target.value)} >
              <option value="none" disabled hidden>Province</option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </Form.Group>
          <Form.Group as={Col} xs={2}>
            <Form.Label>Department/Unit</Form.Label>
            <input type="text" className="form-control" name="address_additional" id="address-additional" placeholder="Unit 123"
              value={unit} onChange={e => setUnit(e.target.value)} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formStartDate">
            <Form.Label>Start Date</Form.Label>
            <input type="datetime-local" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} onBlur={checkDate} required />
          </Form.Group>
          <Form.Group as={Col} controlId="formEndDate">
            <Form.Label>End Date</Form.Label>
            <input type="datetime-local" className="form-control" value={endDate} onChange={e => setEndDate(e.target.value)} onBlur={checkDate} />
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

export default withProtection(AddEvent);