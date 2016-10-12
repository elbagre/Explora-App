import React from 'react';

const QuestionNav = ({ toggle }) => (
  <div className="question-nav">
    <ul className="question-links group">
      <li><button>Upvote</button></li>
      <li><a>Downvote</a></li>
      <li><a onClick={toggle}>Comment</a></li>
    </ul>
  </div>
);

export default QuestionNav;
