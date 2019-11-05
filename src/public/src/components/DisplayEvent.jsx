import React from 'react';

/**
 * Formats the list of events in an unordered list.
 * 
 * @param {string} eventsList The list of events.
 * @param {string} keyword The keyword to filter events.
 * @param {string} skill The skill to filter events.
 * @returns {JSX.Element}
 */
const DisplayEvent = ({event}) => {
    const { name, date, posteddate, skills, address, description, organizer } = event;
    return (
      <li>{name}
        <ul>
          <li>
            Date: {new Date(date).toDateString()}
          </li>
          <li>
            Posted Date: {new Date(posteddate).toDateString()}
          </li>
          <li>
            Skills Required:
            <ul> 
              {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </li>
          <li>
            Address: {address}
          </li>
          <li>
            Description: {description}
          </li>
          <li>
            Organizer: {organizer}
          </li>
        </ul>
      </li>)
  };

  export default DisplayEvent;