import React from 'react';
import { Home, Login, Reset, Browse, ResetSent, AddEvent } from './views';
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
        <ChatView path="chat" />
        <ResetSent path="reset/sent" />
        <AddEvent path="addevent" />
      </Router>
    </div>
  );
};

export default App;
