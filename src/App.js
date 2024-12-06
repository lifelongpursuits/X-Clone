import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import Notifications from './components/Notifications/Notifications';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__main">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </div>
        <Widgets />
        <div className="global-scroll-overlay">
          <div className="global-scroll-content"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
