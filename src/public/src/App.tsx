import React from 'react';
import { Home, Login, Browse } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
      <Browse path="browse" />
    </Router>
  );
}

export default App;
