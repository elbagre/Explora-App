import React from 'react';
import { Link } from 'react-router';

const SessionLinks = ({ currentUser, children }) => {
  return(
    <nav className="registration group">
      <ul className="registration-links group">
        <li className="signup"><Link to="/signup">Create an Account</Link></li>
        <li className="login"><Link to="/login">Log In To Explora</Link></li>
      </ul>
      {children}
    </nav>
  );
};

export default SessionLinks;
