import React from 'react';
import { Home, Login, Reset, Browse, ResetSent, AddEvent, Registration } from './views';
import { Router, navigate } from '@reach/router';
import './App.css';
import { Header } from './components';
import ChatView from './views/ChatView';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {

  /* Pass the navigate function as a callback */
  const sidebarEntries: [string, () => void][] = [
    ["Chat", () => navigate('/chat')],
    ["Browse", () => navigate('/browse')],
    ["View2", () => {}],
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header title="Sumaria" />
      <div style={{ display: "flex", top: "70px", position: "absolute" }}>
        <Sidebar entries={sidebarEntries} />
        <Router style={{ flex: 7 }}>
          <Home path="/" />
          <Login path="login" />
          <Reset path="reset" />
          <Browse path="browse" />
          <ChatView path="chat" />
          <ResetSent path="reset/sent" />
          <AddEvent path="addevent" />
          <Registration path="register" />
        </Router>
      </div>  
    </div>
  );
};

export default App;
