import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';

const App = ({ children }) => (
  <div>
    <h1>Explora</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
