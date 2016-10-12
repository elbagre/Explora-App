import React from 'react';
import QuestionNav from './question_nav.jsx';
import CommentIndex from '../comments/comment_index_container.js';
import { hashHistory } from 'react-router';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: "comments hidden"};
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.image = this.image.bind(this);
  }

  handleClick(id) {
    return () => hashHistory.push(`/question/${id}`);
  }

  toggle() {
    if (this.state.toggle === "comments") {
      this.setState({ toggle: "comments hidden"});
    } else {
      this.setState({ toggle: "comments"});
      this.props.requestAllComments(this.props.question.most_upvoted_answer.id);
    }
  }

  image() {
    if (this.props.question.image !== "/images/original/missing.png") {
      return (
        <div className="cover-photo">
          <img src={this.props.question.image} />
        </div>
      );
    }
  }

  render() {
    return (
      <li className="question-box">
        <h3 onClick={this.handleClick(this.props.question.id)}
          className="question-title">{this.props.question.title}</h3>
        <h4 className="question-author">{this.props.question.most_upvoted_author}</h4>
        {this.image()}
        <p className="question-answer">{this.props.question.most_upvoted_answer.body}</p>
        <QuestionNav toggle={this.toggle} />
        <CommentIndex toggle={this.state.toggle} answerId={this.props.question.most_upvoted_answer.id} />
      </li>
    );
  }
}

export default QuestionIndexItem;
