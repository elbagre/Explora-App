import React from 'react';
import SessionLinks from './session_links.jsx';
import Footer from '../functional_components/footer.jsx';
import HeaderContainer from '../functional_components/header_container.js';

const SessionContent = ({children}) => (
  <div className="session-content">
    <HeaderContainer />
    <div className="session_form_container">
      <SessionLinks children={children} />
      <Footer />
    </div>
  </div>
);

export default SessionContent;
