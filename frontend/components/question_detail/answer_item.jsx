import React from 'react';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="detail-answer">
        <h5>{this.props.answer.author}</h5>
        <p>{this.props.answer.body}</p>
      </article>
    );
  }
}

export default AnswerItem;
