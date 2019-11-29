import React from 'react';
import { Home, Login, Browse, Event, AddEvent, Registration, ImportExcel, Profile, APITesting, RegisterSuccess } from './views';
import { Router, navigate } from '@reach/router';
import './App.css';
import { Header } from './components';
import ChatView from './views/ChatView';
import Sidebar from './components/Sidebar';
//import Footer from './components/Footer';
import { useDispatch } from 'react-redux';
import { setUser, logout } from './actions/actionCreators';
//import { UserType } from './types/User';
import API from './api';
import { toast } from 'react-toastify';
import MyCalendar from './views/Calendar';

toast.configure({
  autoClose: 3000,
  draggable: true,
  draggablePercent: 50
});

const App: React.FC = () => {

  const dispatch = useDispatch();
  /* Pass some nullary function as callback */
  const sidebarEntries: [string, () => void][] = [
    ["Home", () => navigate('/')],
    ["Chat", () => navigate('/chat')],
    ["Browse", () => navigate('/browse')],
    ["Import", () => navigate('/import')],
    ["Add Event", () => navigate('/addevent')],
    ["My Calendar", () => navigate('/calendar')],
    ["API", () => navigate('/api')],
    ["Quick Login", async () => {
      dispatch(logout());
      await API.signup("sdf", "sdf");
      await API.login("sdf", "sdf");
      dispatch(setUser({ username: "sdf", usertype: "volunteer", id: 100, events: [] }));
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
          <Browse path="browse" />
          <Event path="event/:eventId" />
          <ChatView path="chat" />
          <ImportExcel path="import" />
          <Profile path="profile" />
          <MyCalendar path="calendar" />
          <Registration path="register" />
          <APITesting path="api" />
          <RegisterSuccess path="register/success" />
        </Router>
      </div>
    </div>
  );
};

export default App;
