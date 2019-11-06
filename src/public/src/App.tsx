import React from 'react';
import { Home, Login, Reset, Browse, ResetSent, AddEvent, Registration, ImportExcel, Profile, APITesting } from './views';
import { Router, navigate } from '@reach/router';
import './App.css';
import { Header } from './components';
import ChatView from './views/ChatView';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { setUser } from './actions/actionCreators';
import { UserType } from './types/User';
import API from './api';


const App: React.FC = () => {

  const dispatch = useDispatch();
  /* Pass some nullary function as callback */
  const sidebarEntries: [string, () => void][] = [
    ["Home", () => navigate('/')],
    ["Chat", () => navigate('/chat')],
    ["Browse", () => navigate('/browse')],
    ["Import", () => navigate('/import')],
    ["Add Event", () => navigate('/addevent')],
    ["API", () => navigate('/api')],
    ["Quick Login", async () => {
      await API.signup("sdf", "sdf");
      await API.login("sdf", "sdf");
      dispatch(setUser({ username: "sdf", usertype: UserType.Volunteer }));
      navigate("/chat");
    }],
  ];

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
          <APITesting path="api" />
        </Router>
      </div> 
      <Footer /> 
    </div>
  );
};

export default App;
