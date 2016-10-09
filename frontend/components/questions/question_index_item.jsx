import React  from 'react';
import { Link } from 'react-router';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="queston-item">
      <Link to="/question/:id"><h3>this.title</h3></Link>
        <h4>this.most_upvoted_answer.author.username</h4>
        <p>this.most_upvoted_answer.body</p>
      </div>
    );
  }
}

export default QuestionIndexItem;
