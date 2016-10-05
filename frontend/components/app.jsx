import React from 'react';
import HeaderContainer from './functional_components/header_container.js';

const App = ({ children }) => (
  <div className="home">
    <section className="home-main">
      <HeaderContainer />
      {children}
    </section>
  </div>
);

export default App;
