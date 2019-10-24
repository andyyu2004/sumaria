import React from 'react';
import { Home } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
    </Router>
  );
}

export default App;
