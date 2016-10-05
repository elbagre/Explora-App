import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, children }) => {
  if (currentUser === null) {
    return(
      <section>
        <nav className="registration group">
          <ul className="registration-links group">
            <li className="signup"><Link to="/signup">Create an Account</Link></li>
            <li className="login"><Link to="/login">Log In To Explora</Link></li>
          </ul>
          {children}
        </nav>
        <nav className="footer">
          <ul className="group">
            <li>About</li>
            <li>Prizes</li>
            <li>Careers</li>
            <li>Sitemap</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </nav>
      </section>
    );
  } else {
    return (
        <div></div>
    )
  }
};

export default Greeting;





// <li className="signup"><Link to="/signup">Sign Up</Link></li>
// <li className="login"><Link to="/login">Login</Link></li>
