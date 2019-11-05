import React from 'react';
import { Home, Login, Browse, ImportExcel, Profile } from './views';
import { Router } from '@reach/router';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/"/>
      <Login path="login" />
      <Browse path="browse" />
      <ImportExcel path="import" />
      <Profile path="profile" />
    </Router>
  );
}

export default App;
