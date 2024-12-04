import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import Notifications from './components/Notifications/Notifications';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <div className="global-scroll-overlay">
          <div className="global-scroll-content"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
