import { Link } from '@reach/router'
import './Home.css'
import React, { useState, useEffect, useCallback } from 'react';
import * as fuse from 'fuse.js';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import DisplayEventSquare from '../components/DisplayEventSquare.jsx';
import API from '../api';
import './Browse.css'
import { withProtection } from '../components/hoc';
import cityTable from './cityTable.jsx';
import { toast } from 'react-toastify';

const Home = props => {

  const [events, setEvents] = useState([]);

  const fetchEvents = useCallback(async () => {
    (await API.getEvents())
      .map(setEvents)
      .mapLeft(toast.error)
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  return (
    <div className='home-container'>
      <div className='home-body'>
        <div className='home-title'>Sumaria</div>
        <h3>Welcome!</h3>
        <h6>Recent Posts:</h6>
        <Row>
          {events.slice(-3).map(event => <Col><DisplayEventSquare key={event._id} event={event} /></Col>)}
        </Row>
      </div>
    </div>
  );
}

export default Home;