import React from 'react';
import { Home, Login } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
    </Router>
  );
}

export default App;
