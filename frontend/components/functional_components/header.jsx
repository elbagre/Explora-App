import React from 'react';
import Search from '../search/search_container.js';

const Header = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div className="home-header group">
        <nav className="home-nav">
          <Search/>
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
