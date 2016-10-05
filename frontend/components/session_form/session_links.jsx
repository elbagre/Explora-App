import React from 'react';
import { Link } from 'react-router';
import GuestButton from './guest/guest_login.js';

const SessionLinks = ({ currentUser, children }) => {
  return(
    <nav className="registration group">
      <ul className="registration-links group">
        <li className="signup"><Link to="/signup">Create an Account</Link></li>
        <li className="login"><Link to="/login">Log In To Explora</Link></li>
        <li className="terms">By creating an account at Explora you indicate that you have read and
          agree to the Terms of Service and Privacy Policy</li>
      </ul>
      <GuestButton />
      {children}
    </nav>
  );
};

export default SessionLinks;
