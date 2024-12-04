import React, { useState } from 'react';
import './Notifications.css';
import useGlobalScroll from '../../globalScroll';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CommentIcon from '@mui/icons-material/Comment';
import VerifiedIcon from '@mui/icons-material/Verified';

function Notifications() {
  useGlobalScroll();

  const [activeTab, setActiveTab] = useState('all');

  const allNotifications = [
    {
      id: 1,
      type: 'like',
      user: {
        name: 'Elon Musk',
        username: 'elonmusk',
        avatar: 'https://ui-avatars.com/api/?name=Elon+Musk&background=0D8ABC&color=fff'
      },
      content: 'liked your post',
      timestamp: '2h',
      postSnippet: 'Exciting progress with Starship!'
    },
    {
      id: 2,
      type: 'repost',
      user: {
        name: 'Bill Gates',
        username: 'billgates',
        avatar: 'https://ui-avatars.com/api/?name=Bill+Gates&background=0D8ABC&color=fff'
      },
      content: 'reposted your post',
      timestamp: '5h',
      postSnippet: 'Just finished reading a fascinating book on climate change solutions.'
    },
    {
      id: 3,
      type: 'follow',
      user: {
        name: 'NASA',
        username: 'NASA',
        avatar: 'https://ui-avatars.com/api/?name=NASA&background=0D8ABC&color=fff'
      },
      content: 'started following you',
      timestamp: '1d',
    },
    {
      id: 4,
      type: 'comment',
      user: {
        name: 'Sundar Pichai',
        username: 'sundarpichai',
        avatar: 'https://ui-avatars.com/api/?name=Sundar+Pichai&background=0D8ABC&color=fff'
      },
      content: 'commented on your post',
      timestamp: '12h',
      postSnippet: 'AI continues to amaze us with its potential.'
    }
  ];

  const verifiedNotifications = [
    {
      id: 5,
      type: 'verified_like',
      user: {
        name: 'OpenAI',
        username: 'openai',
        avatar: 'https://ui-avatars.com/api/?name=OpenAI&background=0D8ABC&color=fff',
        verified: true
      },
      content: 'liked a post you were mentioned in',
      timestamp: '3h',
      postSnippet: 'Exploring the frontiers of artificial intelligence.'
    },
    {
      id: 6,
      type: 'verified_mention',
      user: {
        name: 'TED',
        username: 'ted',
        avatar: 'https://ui-avatars.com/api/?name=TED&background=0D8ABC&color=fff',
        verified: true
      },
      content: 'mentioned you in a post',
      timestamp: '6h',
      postSnippet: 'Groundbreaking ideas that change perspectives.'
    }
  ];

  const mentionsNotifications = [
    {
      id: 7,
      type: 'mention',
      user: {
        name: 'Dave Lee',
        username: 'dave2d',
        avatar: 'https://ui-avatars.com/api/?name=Dave+Lee&background=0D8ABC&color=fff'
      },
      content: 'mentioned you in a post',
      timestamp: '4h',
      postSnippet: 'Exploring the design and performance of the latest tech products.'
    },
    {
      id: 8,
      type: 'mention',
      user: {
        name: 'Linus Tech Tips',
        username: 'linustechtips',
        avatar: 'https://ui-avatars.com/api/?name=Linus+Tech+Tips&background=0D8ABC&color=fff'
      },
      content: 'replied to your comment',
      timestamp: '7h',
      postSnippet: 'Breaking down the most cutting-edge tech gear and builds.'
    }
  ];

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'like': return <FavoriteIcon className="notification-icon like" />;
      case 'repost': return <RepeatIcon className="notification-icon repost" />;
      case 'follow': return <PersonAddIcon className="notification-icon follow" />;
      case 'comment': return <CommentIcon className="notification-icon comment" />;
      case 'verified_like': return <FavoriteIcon className="notification-icon verified-like" />;
      case 'verified_mention': return <CommentIcon className="notification-icon verified-mention" />;
      case 'mention': return <CommentIcon className="notification-icon mention" />;
      default: return null;
    }
  };

  const renderNotifications = () => {
    let notifications = [];
    switch(activeTab) {
      case 'all':
        notifications = allNotifications;
        break;
      case 'verified':
        notifications = verifiedNotifications;
        break;
      case 'mentions':
        notifications = mentionsNotifications;
        break;
      default:
        notifications = allNotifications;
    }

    return notifications.map(notification => (
      <div key={notification.id} className="notification-item">
        <div className="notification-icon-container">
          {getNotificationIcon(notification.type)}
        </div>
        <div className="notification-content">
          <img 
            src={notification.user.avatar} 
            alt={`${notification.user.username} avatar`} 
            className="notification-avatar" 
          />
          <div className="notification-text">
            <p>
              <strong>{notification.user.name}</strong>{' '}
              {notification.user.verified && <VerifiedIcon className="verified-icon" />}{' '}
              <span className="notification-username">@{notification.user.username}</span>{' '}
              {notification.content}
            </p>
            {notification.postSnippet && (
              <div className="notification-post-snippet">
                "{notification.postSnippet}"
              </div>
            )}
            <span className="notification-timestamp">{notification.timestamp}</span>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="notifications">
      <div className="notifications-header">
        <h2>Notifications</h2>
      </div>
      <div className="notifications-tabs">
        <div 
          className={`notifications-tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </div>
        <div 
          className={`notifications-tab ${activeTab === 'verified' ? 'active' : ''}`}
          onClick={() => setActiveTab('verified')}
        >
          Verified
        </div>
        <div 
          className={`notifications-tab ${activeTab === 'mentions' ? 'active' : ''}`}
          onClick={() => setActiveTab('mentions')}
        >
          Mentions
        </div>
      </div>
      {renderNotifications()}
    </div>
  );
}

export default Notifications;
