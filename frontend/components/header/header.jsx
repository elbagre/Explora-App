import React from 'react';

const Header = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <nav className="header">
        <h4>Quora</h4>
        <p>Welcome {currentUser.username}</p>
        <button onClick={logout}>Logout</button>
      </nav>
    );
  } else {
    return (
      <div className="display-page">
        <h1>Explora</h1>
        <h3>A path to every journey</h3>
      </div>
    );
  }
};

export default Header;
