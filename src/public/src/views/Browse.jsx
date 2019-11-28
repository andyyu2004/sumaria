import React, { useState, useEffect } from 'react';
import * as fuse from 'fuse.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import { DisplayEvent } from '../components';
import API from '../api';
import './Browse.css'
import { withProtection } from '../components/hoc';
import cityTable from './cityTable.jsx';

const Browse = props => {
  const [skill, setSkill] = useState("");
  const [keyword, setKeyword] = useState("");
  const [startDate, setStartDate] = useState("1000-01-1T00:00:00.000Z");
  const [endDate, setEndDate] = useState("9999-01-1T00:00:00.000Z");
  const [province, setProvince] = useState('none');
  const [city, setCity] = useState("");

  /** An example how to fetch async data */
  // Old code: const events = data.events;
  /**
   * A few notes
   * You must define the async function outside of useEffect
   * useEffect(async () => ... ) is not allowed
   * Also, the use effect usually needs to be wrapped in curly braces
   * i.e.
   * useEffect(() => fetchEvents(), []);
   * is not so good, as useEffect is not allowed to return anything except cleanup.
   */

  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventInfo = await API.getEvents();
    eventInfo.match(
      err => console.log(err),
      events => setEvents(events),
    );
  };

  useEffect(() => { fetchEvents(); }, []);

  const optionsName = {
    shouldSort: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 0,
    keys: [
      "name"
    ]
  }

  const optionsSkills = {
    shouldSort: false,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "skills"
    ]
  }

  const generateCityOptions = (province) => {
    var cities = cityTable[province];
    var constructOption = (city) => {
      return <option key={city} value={city}>{city}</option>
    }

    return cities.map(constructOption)

  }

  let eventsFiltered = skill ? (new fuse(events, optionsSkills)).search(skill) : events;
  eventsFiltered = keyword ? (new fuse(eventsFiltered, optionsName)).search(keyword) : eventsFiltered;
  eventsFiltered = eventsFiltered.filter(event => ((event.date) > startDate))
  eventsFiltered = eventsFiltered.filter(event => ((event.date) < endDate))
  eventsFiltered = city ? eventsFiltered.filter(event => ((event.city) === city)) : eventsFiltered

  // console.log(province);

  return (
    <div className='browse-container'>
      <h1>Browse For Events</h1>
      <Form.Row>
        <Form.Group as={Col} xs={3} className='browse-input'>
          <Form.Label>Skill Name</Form.Label>
          <Form.Control placeholder="Search for a skill..." onChange={e => setSkill(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} xs={3}>
          <Form.Label>Event Name</Form.Label>
          <Form.Control placeholder="Search for an event..." onChange={e => setKeyword(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId="formStartDate">
          <Form.Label>After this date:</Form.Label>
          <input type="date" className="form-control" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </Form.Group>
        <Form.Group as={Col} controlId="formEndDate">
          <Form.Label>Before this date</Form.Label>
          <input type="date" className="form-control" value={endDate} onChange={e => setEndDate(e.target.value)} />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>City</Form.Label>
          <select id="address-city" className="form-control" placeholder="City"
            value={city} onChange={e => setCity(e.target.value)}>
            {generateCityOptions(province)}
          </select>
        </Form.Group>
        <Form.Group as={Col}>
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
      </Form.Row>
      {/* <Form.Row>
        <Form.Group as={Col}>
          <button type="reset" class="btn btn-primary" onClick={setProvince("none")}>Clear</button>
        </Form.Group>
      </Form.Row> */}
      <div>
        {eventsFiltered.map(event => <DisplayEvent key={event._id} event={event} />)}
      </div>
    </div>
  );
};

export default withProtection(Browse);