import React from 'react';
import { Home, Login, Reset, Browse, ResetSent } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
      <Reset path="reset" />
      <Browse path="browse" />
      <ResetSent path="reset/sent" />
    </Router>
  );
}

export default App;
