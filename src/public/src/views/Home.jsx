import React from 'react'

const Home = props => {
  return (
    <div>
      <h2>Home</h2>
      <p><a href='browse'>Browse for events</a></p>
      <p><a href='import'>Import Excel file</a></p>
      <p><a href='addevent'>Add event</a></p>
    </div>
  );
}

export default Home;