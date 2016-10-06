import React from 'react';
import QuestionIndexItem from './question_index_item.jsx';
import QuestionNav from './question_nav.jsx';

class QuestionIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllQuestions();
  }

  render() {
    console.log(this.props.questions);
    const questions = this.props.questions.reverse().map((question, idx) => (
      <li className="question-box" key={idx}>
        <h3 className="question-title">{question.title}</h3>
        <h4 className="question-author">{question.most_upvoted_author}</h4>
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
