import React from 'react';
import { Home, Login, Browse, Reset, ResetSent, AddEvent, ImportExcel, Profile } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
      <Reset path="reset" />
      <Browse path="browse" />
      <ImportExcel path="import" />
      <Profile path="profile" />
	    <AddEvent path="addevent" />
      <ResetSent path="reset/sent" />
    </Router>
  );
}

export default App;
