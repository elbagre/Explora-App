import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return(
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return(
      <nav>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li>  <Link to="/login">Login</Link></li>
        </ul>
      </nav>
    );
  }
};

export default Greeting;
