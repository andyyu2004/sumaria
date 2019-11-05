import React from 'react'
import { Link } from '@reach/router'

const Home = props => {

  return (
    <div>
      <h2>Home</h2>
      <Link to="browse">Browse for events</Link><br />
      <Link to='import'>Import Excel file</Link><br />
      <Link to='addevent'>Add event</Link><br />
    </div>
  );
}

export default Home;