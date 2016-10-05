import React from 'react';
import QuestionIndexItem from './question_index_item.jsx';
import QuestionNav from './question_nav.jsx';

class QuestionIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllQuestions();
  }

  render() {
    const questions = this.props.questions.map((question, idx) => (
      <li className="question-box" key={idx}>
        <h4 className="question-title">{question.title}</h4>
        <h5 className="question-author">{question.author.username}</h5>
        <text className="question-description">{question.description}</text>
        <QuestionNav />
      </li>
    ));
    return (
      <div className="question-index">
        <h2>Top Explorations For You</h2>
        <ul className="question-list">
          {questions}
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
