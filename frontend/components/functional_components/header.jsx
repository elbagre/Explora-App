import React from 'react';

const Header = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div className="home-header group">
        <nav className="home-nav">
          <logo className="home-logo">Explora</logo>
          <span className="search">Ask or Search Explora</span>
          <ul className="home-links group">
            <li>Read</li>
            <li>Answer</li>
          </ul>

          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="root-header">
        <h1>Explora</h1>
        <h3>A path to every journey</h3>
      </div>
    );
  }
};

export default Header;
