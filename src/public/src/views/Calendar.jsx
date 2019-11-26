import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
//import API from '../api';
//import { Left } from '../types/Either';
//import './Calendar.css'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

/*
need api to get the list of events for current logged in user
(unique id, title of event, start time and end time, and description)
*/
const events = [
  {
    id: 0,
    title: 'CSC301 Presentation',
    allDay: true,
    start: new Date(2019, 11, 4),
    end: new Date(2019, 11, 5),
  },
  {
    id: 1,
    title: 'Team 24 Metting',
    start: new Date(2019, 10, 25),
    end: new Date(2019, 10, 29),
    desc: 'Non-stop',
  },
  {
    id: 1.5,
    title: 'Volunteer Party',
    start: new Date(2019, 10, 26, 19, 30, 0),
    end: new Date(2019, 10, 26, 23, 30, 0),
  },
  {
    id: 2,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 2.1,
    title: 'Volunteer Exam',
    start: new Date(2019, 10, 18, 18, 0, 0),
    end: new Date(2019, 10, 18, 20, 5, 0),
  },
  {
    id: 3.3,
    title: 'International Student Fund Raising',
    start: new Date(2019, 10, 17, 10, 0, 0),
    end: new Date(2019, 10, 19, 18, 30, 0),
  }
];

const MyCalendar = props => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{height: 600}}
    />
  </div>
)

export default MyCalendar;