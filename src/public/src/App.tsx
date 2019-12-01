import { navigate, Router } from '@reach/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logout, setUser } from './actions/actionCreators';
import API from './api';
import './App.css';
import { Header } from './components';
import Sidebar from './components/Sidebar';
import { AddEvent, APITesting, Browse, Home, ImportExcel, Login, Profile, RegisterSuccess, Registration, ChatView, ViewEvent, MyCalendar, ErrorView } from './views';

toast.configure({
  autoClose: 2000,
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
      (await API.login("sdf", "sdf"))
        .map(({ _id, username }) => {
          dispatch(setUser({ username, usertype: "volunteer", _id, events: [] }));
          navigate("/event/");
          return null;
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
          <ViewEvent path="event/:eventId" />
          <ChatView path="chat" />
          <ImportExcel path="import" />
          <Profile path="profile" />
          <MyCalendar path="calendar" />
          <AddEvent path="addevent" />
          <Registration path="register" />
          <APITesting path="api" />
          <RegisterSuccess path="register/success" />
          <ErrorView path="*" error="Page not found (404)" />
        </Router>
      </div>
    </div>
  );
};

export default App;
