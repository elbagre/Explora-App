import React from 'react';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="comment-item">
        <span />
        <div>
          <h5>{this.props.comment.authorName}</h5>
          <p>{this.props.comment.body}</p>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
