import React, { useState, useEffect } from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';

// Import the posts from Feed component
const feedPosts = [
  {
    id: 1,
    content: " Exciting progress with Starship! Next launch coming soon",
    author: "Elon Musk",
    username: "elonmusk"
  },
  {
    id: 2,
    content: "Just finished reading a fascinating book on climate change solutions. What are you reading these days?",
    author: "Bill Gates",
    username: "BillGates"
  },
  {
    id: 3,
    content: " Webb Telescope captures stunning new image of the Carina Nebula!",
    author: "NASA",
    username: "NASA"
  },
  {
    id: 4,
    content: "AI continues to amaze us with its potential. Excited to share our latest developments in making technology more accessible to everyone.",
    author: "Sundar Pichai",
    username: "sundarpichai"
  },
  {
    id: 5,
    content: "Innovation is in Apple's DNA. Can't wait to show you what's next! #AppleEvent",
    author: "Tim Cook",
    username: "tim_cook"
  },
  {
    id: 6,
    content: "A rare snow leopard spotted in the Himalayas. These elusive cats are true masters of camouflage.",
    author: "National Geographic",
    username: "NatGeo"
  },
  {
    id: 7,
    content: "Another successful Falcon 9 landing! Reusability is the key to making life multiplanetary. ",
    author: "SpaceX",
    username: "SpaceX"
  },
  {
    id: 8,
    content: " Another day, another workout. Stay hungry, stay humble. #IronParadise",
    author: "Dwayne Johnson",
    username: "TheRock"
  },
  {
    id: 9,
    content: "Great team victory today! Thanks to all the fans for the amazing support. Siu! ",
    author: "Cristiano Ronaldo",
    username: "Cristiano"
  }
];

// Additional simulated posts with carefully added usernames
const additionalPosts = [
  { 
    id: 10, 
    content: "Excited about the future of AI!", 
    author: "Sam Altman", 
    username: "sama" 
  },
  { 
    id: 11, 
    content: "Building great products takes time and patience.", 
    author: "Paul Graham", 
    username: "paulg" 
  },
  { 
    id: 12, 
    content: "Startups are about solving real problems.", 
    author: "Naval", 
    username: "naval" 
  },
  { 
    id: 13, 
    content: "Machine learning is transforming every industry.", 
    author: "AI Researcher", 
    username: "airesearcher" 
  },
  { 
    id: 14, 
    content: "Innovation happens at the intersection of different fields.", 
    author: "Tech Innovator", 
    username: "techinnovator" 
  },
  { 
    id: 15, 
    content: "The future of technology is about solving global challenges.", 
    author: "Bill Gates", 
    username: "BillGates" 
  },
  { 
    id: 16, 
    content: "Philanthropy can drive meaningful change in the world.", 
    author: "Bill Gates", 
    username: "BillGates" 
  },
  { 
    id: 17, 
    content: "Climate change requires innovative technological solutions.", 
    author: "Elon Musk", 
    username: "elonmusk" 
  },
  { 
    id: 18, 
    content: "Artificial intelligence will reshape how we work and live.", 
    author: "Satya Nadella", 
    username: "satyanadella" 
  }
];

// Combine posts
const allPosts = [...feedPosts, ...additionalPosts];

function Widgets() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // More comprehensive search
    const results = allPosts.filter(post => 
      post.content.toLowerCase().includes(term.toLowerCase()) ||
      post.author.toLowerCase().includes(term.toLowerCase()) ||
      (post.username && post.username.toLowerCase().includes(term.toLowerCase()))
    );

    setSearchResults(results);
  };

  const trends = [
    { title: 'Startup Culture', tweets: '5,382' },
    { title: 'AI Innovation', tweets: '3,291' },
    { title: 'Tech Trends', tweets: '2,845' },
    { title: 'Silicon Valley', tweets: '2,201' },
    { title: 'Venture Capital', tweets: '1,876' }
  ];

  const whoToFollow = [
    { name: 'Sam Altman', handle: '@sama' },
    { name: 'Paul Graham', handle: '@paulg' },
    { name: 'Naval', handle: '@naval' }
  ];

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input 
          placeholder="Search X" 
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {searchTerm && (
        <div className="search__results">
          <h2>Search Results</h2>
          {searchResults.length > 0 ? (
            searchResults.map(result => (
              <div key={result.id} className="search__result-item">
                <div className="result__author">
                  {result.author} 
                  {result.username && ` (@${result.username})`}
                </div>
                <div className="result__content">{result.content}</div>
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      )}

      <div className="widgets__container">
        <div className="widgets__trends">
          <h2>Trends for you</h2>
          {trends.map((trend, index) => (
            <div key={index} className="trend__item">
              <div className="trend__title">{trend.title}</div>
              <div className="trend__tweets">{trend.tweets} posts</div>
            </div>
          ))}
        </div>

        <div className="widgets__follow">
          <h2>Who to follow</h2>
          {whoToFollow.map((person, index) => (
            <div key={index} className="follow__item">
              <div className="follow__info">
                <div className="follow__name">{person.name}</div>
                <div className="follow__handle">{person.handle}</div>
              </div>
              <button className="follow__button">Follow</button>
            </div>
          ))}
        </div>

        <div className="widgets__footer">
          <div className="footer__links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Ads info</a>
            <a href="#">More</a>
          </div>
          <div className="footer__copyright">
            2024 X Corp.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
