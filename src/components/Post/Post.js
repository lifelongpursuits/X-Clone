import React, { useState, useEffect } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './Post.css';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log('Post received:', post);
  }, [post]);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRepost = () => {
    setReposted(!reposted);
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', post.image);
    setImageError(true);
  };

  return (
    <div className="post">
      <div className="post-avatar">
        <img 
          src={`https://ui-avatars.com/api/?name=${post.displayName}&background=random`} 
          alt={post.displayName} 
        />
      </div>
      <div className="post-content">
        <div className="post-header">
          <span className="display-name">{post.displayName}</span>
          <span className="username">@{post.username}</span>
          <span className="timestamp">{post.timestamp}</span>
        </div>
        <div className="post-text">{post.content}</div>
        {post.image && !imageError && (
          <div className="post-image">
            <img 
              src={post.image} 
              alt="Post content" 
              onError={handleImageError}
            />
          </div>
        )}
        {imageError && (
          <div className="post-image-error">
            Image failed to load
          </div>
        )}
        <div className="post-actions">
          <div className="action-item">
            <ChatBubbleOutlineIcon />
            <span>{post.replies}</span>
          </div>
          <div className={`action-item ${reposted ? 'reposted' : ''}`} onClick={handleRepost}>
            <RepeatIcon />
            <span>{post.reposts}</span>
          </div>
          <div className={`action-item ${liked ? 'liked' : ''}`} onClick={handleLike}>
            {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            <span>{post.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
