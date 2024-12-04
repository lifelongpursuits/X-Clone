import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">𝕏</Link>
      </div>
      <nav>
        <Link to="/" className="nav-item">
          <HomeIcon /> <span>Home</span>
        </Link>
        <Link to="/profile" className="nav-item">
          <PersonIcon /> <span>Profile</span>
        </Link>
        <Link to="/notifications" className="nav-item">
          <NotificationsIcon /> <span>Notifications</span>
        </Link>
      </nav>
      <button className="post-button">Post</button>
    </div>
  );
}

export default Sidebar;
