import React from 'react';
import QuestionIndexItem from './question_index_item.jsx';

class QuestionIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllQuestions();
  }

  render() {
    const questions = this.props.questions.map((question, idx) => (
      <QuestionIndexItem question={question}
                         requestAllComments={this.props.requestAllComments}
                         key={idx} />
    ));
    return (
      <div className="question-index">
        <h2>Top Explorations For You</h2>
        <ul className="question-list group">
          {questions}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
