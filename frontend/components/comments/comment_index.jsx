import React from 'react';
import CommentIndexItem from './comment_index_item.jsx';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.comments = this.comments.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      answer_id: this.props.answerId,
      author_id: this.props.currentUser.id,
      body: this.state.body
    });
    this.setState({ body: ""});
    this.props.requestAllComments(this.props.answerId);
  }

  comments(comments) {
    return (
      comments.filter( (comment) => {
        if (comment.answer_id === this.props.answerId) {
          return comment;
        }
      })
    );
  }

  render() {
    const comments = this.comments(this.props.comments).map( (comment, idx) => (
      <CommentIndexItem comment={comment} key={idx} />
    ));
    return(
      <div className={this.props.toggle}>
        <div className="comment-form">
          <span />
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              value={this.state.body}
              placeholder="Add a comment..."
              onChange={this.handleChange} />
            <input type="submit" value="Comment" />
          </form>
        </div>
        <div>
          {comments}
        </div>
      </div>
    );
  }
}

export default CommentIndex;
