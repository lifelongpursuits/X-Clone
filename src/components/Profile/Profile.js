import React, { useState } from 'react';
import './Profile.css';
import Post from '../Post/Post';
import useGlobalScroll from '../../globalScroll';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LinkIcon from '@mui/icons-material/Link';

function Profile() {
  useGlobalScroll();

  const [posts] = useState([
    {
      id: 1,
      displayName: "Expanding Anyway",
      username: "expandinganyway",
      content: "Exploring the intersection of technology, creativity, and personal growth. Every day is an opportunity to learn and expand.",
      timestamp: "1h",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      likes: 1245,
      reposts: 256,
      replies: 89
    },
    {
      id: 2,
      displayName: "Expanding Anyway",
      username: "expandinganyway",
      content: "Reflecting on the power of continuous learning and personal development. What's your current growth journey?",
      timestamp: "12h",
      likes: 678,
      reposts: 124,
      replies: 45
    },
    {
      id: 3,
      displayName: "Expanding Anyway",
      username: "expandinganyway",
      content: "Just finished an incredible workshop on design thinking and innovation. Excited to apply these new insights!",
      timestamp: "1d",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      likes: 2345,
      reposts: 456,
      replies: 178
    }
  ]);

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-content">
          <div className="back-button">
            <ArrowBackIcon />
          </div>
          <div className="profile-header-text">
            <h2>Expanding Anyway</h2>
            <span className="post-count">2,345 posts</span>
          </div>
        </div>
      </div>

      <div className="profile-banner">
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.quickmeme.com%2Fimg%2Fe3%2Fe3ae033bed705a002cfe8ca824b9aba5c0c8df8e449d3fd12eab63f574abeb22.jpg&f=1&nofb=1&ipt=7f6d510cca6642e41039ff2d7c9f72c27f74db80c28656ca8864610af07f88c1&ipo=images" 
          alt="Profile Banner" 
        />
      </div>

      <div className="profile-info">
        <div className="profile-avatar">
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpisces.bbystatic.com%2Fimage2%2FBestBuy_US%2Fimages%2Fproducts%2F2510%2F25103515_so.jpg&f=1&nofb=1&ipt=36159b62af905b163a0ad1cfe5930f129a380971ce0596317d88c2e42408d91a&ipo=images" 
            alt="Profile Avatar" 
          />
        </div>
        <div className="profile-details">
          <h2>Expanding Anyway</h2>
          <span className="username">@expandinganyway</span>
          <p className="bio">
            Exploring the boundaries of personal growth, technology, and creativity. 
            Lifelong learner | Innovation enthusiast | Sharing insights and inspiration.
          </p>
          <div className="profile-metadata">
            <span><LocationOnIcon /> Remote</span>
            <span><LinkIcon /> expandinganyway.com</span>
            <span><CalendarTodayIcon /> Joined March 2023</span>
          </div>
          <div className="profile-stats">
            <span><strong>245</strong> Following</span>
            <span><strong>12.3K</strong> Followers</span>
          </div>
        </div>
      </div>

      <div className="profile-nav">
        <div className="profile-nav-item active">Posts</div>
        <div className="profile-nav-item">Replies</div>
        <div className="profile-nav-item">Media</div>
        <div className="profile-nav-item">Likes</div>
      </div>

      <div className="profile-posts">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
