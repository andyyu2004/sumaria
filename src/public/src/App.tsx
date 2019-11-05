import React from 'react';
import { Home, Login, Browse, AddEvent } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
      <Browse path="browse" />
	  <AddEvent path="addevent" />
    </Router>
  );
}

export default App;
