import React, { useState } from 'react';
import './Feed.css';
import Post from '../Post/Post';
import ImageIcon from '@mui/icons-material/Image';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useGlobalScroll from '../../globalScroll';

function Feed() {
  useGlobalScroll();

  const [posts] = useState([
    {
      id: 1,
      displayName: "Elon Musk",
      username: "elonmusk",
      content: "🚀 Exciting progress with Starship! Next launch coming soon",
      timestamp: "2h",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.usatoday.com%2Fgcdn%2Fauthoring%2Fauthoring-images%2F2024%2F10%2F14%2FUSAT%2F75668856007-20230420-t-161525-z-2010596825-hp-1-ej-4-k-18-ss-03-rtrmadp-3-spaceexplorationstarship.JPG%3Fwidth%3D1960%26height%3D1306%26fit%3Dcrop%26format%3Dpjpg%26auto%3Dwebp&f=1&nofb=1&ipt=486ad7503b20e7365250b9f0d45cb92bea3e01b1b72a0f673fb2f4312a89a9d7&ipo=images",
      likes: 50243,
      reposts: 12876,
      replies: 3420
    },
    {
      id: 2,
      displayName: "Bill Gates",
      username: "BillGates",
      content: "Just finished reading a fascinating book on climate change solutions. What are you reading these days?",
      timestamp: "32m",
      image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic2.businessinsider.com%2Fimage%2F5485c7f36bb3f76e7d771d3e%2Fhere-are-the-5-best-books-bill-gates-read-in-2014.jpg&f=1&nofb=1&ipt=9781e911af0670a8d2489d5647f8747463fc8af29f87d4604e66b83058a0d0b4&ipo=images",
      likes: 15700,
      reposts: 3200,
      replies: 2100
    },
    {
      id: 3,
      displayName: "NASA",
      username: "NASA",
      content: "🌌 Webb Telescope captures stunning new image of the Carina Nebula!",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UMiOMCgbEzhCB4B_Q5o7BAHaE8%26pid%3DApi&f=1&ipt=dd3322691d414ec5664b3a738efadb81e111aae37e9f6e4299e4df46fdeaa53b&ipo=images",
      timestamp: "6h",
      likes: 154321,
      reposts: 45678,
      replies: 12543
    },
    {
      id: 4,
      displayName: "Sundar Pichai",
      username: "sundarpichai",
      content: "AI continues to amaze us with its potential. Excited to share our latest developments in making technology more accessible to everyone.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      timestamp: "2h",
      likes: 32100,
      reposts: 8700,
      replies: 3400
    },
    {
      id: 5,
      displayName: "Tim Cook",
      username: "tim_cook",
      content: "Innovation is in Apple's DNA. Can't wait to show you what's next! #AppleEvent",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
      timestamp: "4h",
      likes: 28654,
      reposts: 8765,
      replies: 2341
    },
    {
      id: 6,
      displayName: "National Geographic",
      username: "NatGeo",
      content: "A rare snow leopard spotted in the Himalayas. These elusive cats are true masters of camouflage.",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F943892.jpg&f=1&nofb=1&ipt=763a679de09001484a63d4d8387c3549e5d7833aa749776027c80b232bd6ce4e&ipo=images",
      timestamp: "8h",
      likes: 89432,
      reposts: 23456,
      replies: 5678
    },
    {
      id: 7,
      displayName: "SpaceX",
      username: "SpaceX",
      content: "Another successful Falcon 9 landing! Reusability is the key to making life multiplanetary. 🚀",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wccftech.com%2Fwp-content%2Fuploads%2F2023%2F03%2FSPACEX-FALCON-9-LANDING-1456x971.jpeg&f=1&nofb=1&ipt=8fc30b1ea4284bdd38131540e6ea8117614dc1258bf48be3ae964bc893726314&ipo=images",
      timestamp: "12h",
      likes: 76543,
      reposts: 19876,
      replies: 4321
    },
    {
      id: 8,
      displayName: "Dwayne Johnson",
      username: "TheRock",
      content: "💪 Another day, another workout. Stay hungry, stay humble. #IronParadise",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclickhole.com%2Fwp-content%2Fuploads%2F2018%2F11%2Fhavtympvpqz33ablp0c4-2048x1152.jpg&f=1&nofb=1&ipt=41b7a705eb96461cf435c9d535f26a47e359e56e628822a71f38d0c462667a48&ipo=images",
      timestamp: "5h",
      likes: 123400,
      reposts: 25600,
      replies: 8900
    },
    {
      id: 9,
      displayName: "Cristiano Ronaldo",
      username: "Cristiano",
      content: "Great team victory today! Thanks to all the fans for the amazing support. Siu! ⚽️",
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      timestamp: "6h",
      likes: 892000,
      reposts: 156000,
      replies: 45000
    }
  ]);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      <div className="post-input">
        <input placeholder="What's happening?" />
        <div className="post-input-options">
          <div className="post-input-icons">
            <div className="icon-wrapper">
              <ImageIcon className="post-icon" />
            </div>
            <div className="icon-wrapper">
              <GifIcon className="post-icon" />
            </div>
            <div className="icon-wrapper">
              <PollIcon className="post-icon" />
            </div>
            <div className="icon-wrapper">
              <EmojiEmotionsIcon className="post-icon" />
            </div>
            <div className="icon-wrapper">
              <LocationOnIcon className="post-icon" />
            </div>
          </div>
          <button>Post</button>
        </div>
      </div>

      <div className="posts">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
