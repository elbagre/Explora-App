import React from 'react';
import { merge } from 'lodash';
import CommentIndex from '../comments/comment_index_container.js';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "comment-hidden",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.toggle !== "comment") {
      this.setState({
        toggle: "comment",
      });
    }
    this.props.requestAllComments(this.props.answer.id);
  }

  render() {
    console.log(this.state.toggle);
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
          <li><a onClick={this.handleClick}>Comment</a></li>
        </ul>
        <CommentIndex className={this.state.toggle} answerId={this.props.answer.id} />
      </article>
    );
  }
}

export default AnswerItem;
