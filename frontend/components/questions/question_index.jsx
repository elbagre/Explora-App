import React from 'react';
import QuestionNav from './question_nav.jsx';
import { hashHistory } from 'react-router';

class QuestionIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllQuestions();
  }

  handleClick(id) {
    return () => hashHistory.push(`/question/${id}`);
  }

  render() {
    const questions = this.props.questions.map((question, idx) => (
      <li className="question-box" key={idx}>
        <h3 onClick={this.handleClick(question.id)} className="question-title">{question.title}</h3>
        <h4 className="question-author">{question.most_upvoted_answer.author}</h4>
        <p className="question-answer">{question.most_upvoted_answer.body}</p>
        <QuestionNav />
      </li>
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
