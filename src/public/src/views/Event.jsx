import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import { DisplayEvent } from '../components';
import API from '../api';
import './Browse.css'
import { withProtection } from '../components/hoc';

const Event = props => {

  const [event, setEvent] = useState();
  /*
  const fetchEvent = async () => {
    const eventInfo = await API.getEventById(props.eventId);
    eventInfo.match(
      err => console.log(err),
      event => setEvent(event),
    );
  };

  useEffect(() => { fetchEvents(); }, null);
*/

  return (
    <div className='browse-container'>
      This event has id: {props.eventId} 
      <div>
        {event ? <DisplayEvent key={event._id} event={event} /> : 'N/A'}
      </div>
    </div>
  );
};

export default withProtection(Event);