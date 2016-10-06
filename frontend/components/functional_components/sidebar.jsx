import React from 'react';

const SideBar = () => {
  return (
    <aside className="sidebar group">
      <nav className="feeds group">
        <h3>Feeds</h3>
        <p>Edit</p>
        <ul className="group">
          <li>Africa</li>
          <li>Asia</li>
          <li>America</li>
          <li>Australia</li>
          <li>Europe</li>
        </ul>
      </nav>
      <nav className="trending group">
        <h3>Trending Now</h3>
        <ul className="group">
          <li>Is it dangerous to travel to Syria?</li>
          <li>I got robbed while backpacking through Bolivia</li>
          <li>Is it illegal to buy bamba?</li>
          <li>What are some good vegetarian foods in Croatia?</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
