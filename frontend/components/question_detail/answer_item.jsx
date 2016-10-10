import React from 'react';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="detail-answer">
        <div className="detail-answer-header">
          <span></span>
          <h5>{this.props.answer.author}</h5>
        </div>
        <p>{this.props.answer.body}</p>
        <ul className="detail-links">
          <li><button className="links-button">Upvote</button></li>
          <li><a>Downvote</a></li>
          <li><a>Comment</a></li>
        </ul>
      </article>
    );
  }
}

export default AnswerItem;
