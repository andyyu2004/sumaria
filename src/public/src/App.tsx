import React from 'react';
import { Home, Login, Browse, Reset, ResetSent, AddEvent, ImportExcel, Profile } from './views';
import { Router } from '@reach/router';
import './App.css';
import { Header } from './components';
import ChatView from './views/ChatView';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <Login path="login" />
        <Reset path="reset" />
        <Browse path="browse" />
        <ImportExcel path="import" />
        <ChatView path="chat" />
        <ResetSent path="reset/sent" />
        <AddEvent path="addevent" />
      </Router>
    </div>
  );
};

export default App;
