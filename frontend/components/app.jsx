import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import HeaderContainer from './header/header_container.js';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    <GreetingContainer />
    {children}
  </div>
);

export default App;
