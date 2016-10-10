import React  from 'react';
import { hashHistory } from 'react-router';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("hello");
    hashHistory.push(`/question/${this.props.id}`);
  }

  render() {
    return(
      <div className="queston-item">
        <h3> onClick={this.handleClick}>this.title</h3>
        <h4>this.most_upvoted_answer.author.username</h4>
        <p>this.most_upvoted_answer.body</p>
      </div>
    );
  }
}

export default QuestionIndexItem;
