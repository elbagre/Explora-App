import React  from 'react';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="queston-item">
        <h3>this.title</h3>
        <h4>this.most_upvoted_answer.author.username</h4>
        <p>this.most_upvoted_answer.body</p>
      </div>
    );
  }
}

export default QuestionIndexItem;
