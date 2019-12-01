import { Link } from '@reach/router'
import './Home.css'
import React, { useState, useEffect, useCallback } from 'react';
//import * as fuse from 'fuse.js';
//import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import DisplayEventSquare from '../components/DisplayEventSquare.jsx';
import API from '../api';
import './Browse.css'
//import { withProtection } from '../components/hoc';
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
    <div>
      <h2 className="m-3 text-center ">Home</h2>
      <div className="row mx-3">
        <Link to="browse" className="col-4">
          <div className="mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4><i className="fa fa-calendar-alt mr-2"></i>Browse for events</h4>
          </div>
        </Link>
        <Link to="import" className="col-4">
          <div className="mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4><i className="fa fa-upload mr-2"></i>Import Excel file</h4>
          </div>
        </Link>
        <Link to="addevent" className="col-4">
          <div className="mx-1 mb-3 shadow-sm text-center justify-content-center align-items-center d-flex bg-light">
            <h4><i className="fa fa-plus mr-2"></i>Add event</h4>
          </div>
        </Link>
      </div>
      <div className="row mx-3 subtitle">
        <h6 className='home-subtitle'>Recent Posts:</h6>
      </div>
      <div className="row mx-3">
        {events.slice(-3).map(event => <Col><DisplayEventSquare key={event._id} event={event} /></Col>)}
      </div>
    </div>
  );
}

export default Home;