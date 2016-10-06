import React from 'react';
import SideBar from './functional_components/sidebar.jsx';
import HeaderContainer from './functional_components/header_container.js';

const App = ({ children }) => (
  <div className="home">
    <HeaderContainer />
    <section className="home-main group">
      <SideBar className="home-left-sidebar"/>
      {children}
    </section>
  </div>
);

export default App;
