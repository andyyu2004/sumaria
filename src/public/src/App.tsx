import { navigate, Router } from '@reach/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout, setUser } from './actions/actionCreators';
import API from './api';
import './App.css';
import { Header } from './components';
import Sidebar from './components/Sidebar';
import { AddEvent, APITesting, Browse, Home, ImportExcel, Login, Profile, RegisterSuccess, Registration, ChatView, ViewEvent, MyCalendar } from './views';

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
      (await API.login("sdf", "sdf"))
        .map(({ _id, username }) => {
          dispatch(setUser({ username, usertype: "volunteer", _id, events: [] }));
          navigate("/event/");
        });
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
          <ViewEvent path="event/:eventname" />
          <ChatView path="chat" />
          <ImportExcel path="import" />
          <Profile path="profile" />
          <MyCalendar path="calendar" />
          <AddEvent path="addevent" />
          <Registration path="register" />
          <APITesting path="api" />
          <RegisterSuccess path="register/success" />
        </Router>
      </div>
    </div>
  );
};

export default App;
