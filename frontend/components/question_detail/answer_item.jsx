import React from 'react';
import { merge } from 'lodash';
import CommentIndex from '../comments/comment_index_container.js';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: "comments hidden",
    };
    this.handleClick = this.handleClick.bind(this);
    this.image = this.image.bind(this);
  }

  handleClick() {
    if (this.state.toggle !== "comments") {
      this.setState({
        toggle: "comments",
      });
      this.props.requestAllComments(this.props.answer.id);
    } else {
      this.setState({ toggle: "comments hidden"});
    }
  }

  image() {
    if (this.props.answer.image !== "/images/original/missing.png") {
      return (
        <div className="cover-photo">
          <img src={this.props.answer.image} />
        </div>
      );
    }
  }

  render() {
    return (
      <article className="detail-answer">
        <div className="detail-answer-header">
          <span></span>
          <h5>{this.props.answer.author}</h5>
        </div>
        {this.image()}
        <p>{this.props.answer.body}</p>
        <ul className="detail-links">
          <li><button className="links-button">Upvote</button></li>
          <li><a>Downvote</a></li>
          <li><a onClick={this.handleClick}>Comment</a></li>
        </ul>
        <CommentIndex toggle={this.state.toggle} answerId={this.props.answer.id} />
      </article>
    );
  }
}

export default AnswerItem;
