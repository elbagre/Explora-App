import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser }) => {
  if (currentUser === null) {
    return(
      <nav className="registration">
        <ul className="registration-links">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  } else {
    return (
        <div></div>
    )
  }
};

export default Greeting;
