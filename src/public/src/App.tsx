import React from 'react';
import { Home, Login, Reset, Browse, ResetSent, AddEvent, Registration, ImportExcel, Profile } from './views';
import { Router, navigate } from '@reach/router';
import './App.css';
import { Header } from './components';
import ChatView from './views/ChatView';
import Sidebar from './components/Sidebar';

/* Pass some nullary as callback */
const sidebarEntries: [string, () => void][] = [
  ["Chat", () => navigate('/chat')],
  ["Browse", () => navigate('/browse')],
  ["View2", () => {}],
];

const App: React.FC = () => {
  return (
    <div className="app">
      <Header title="Sumaria" />
      <div className="app-body">
        <Sidebar entries={sidebarEntries} />
        <Router className="app-main">
          <Home path="/" />
          <Login path="login" />
          <Reset path="reset" />
          <Browse path="browse" />
          <ChatView path="chat" />
          <ImportExcel path="import" />
          <Profile path="profile" />
          <ResetSent path="reset/sent" />
          <AddEvent path="addevent" />
          <Registration path="register" />
        </Router>
      </div>  
    </div>
  );
};

export default App;
