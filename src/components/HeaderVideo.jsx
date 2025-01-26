import React from 'react';
import './HeaderVideo.css';

const Header = () => {
  return (
    <header className="header">
      <div className="video-background">
        <video className="video" autoPlay loop muted playsInline>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="overlay">
        <h1>Welcome to My Website</h1>
        <p>Explore the best content here!</p>
      </div>
    </header>
  );
};

export default Header;
