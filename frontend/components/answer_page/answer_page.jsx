import React from 'react';
import AnswerPageIndexItem from './answer_page_index_item.jsx';

class AnswerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllQuestions();
  }

  render() {
    const unansweredQuestions = this.props.questions.filter( (question) => {
      if (question.answer_count < 10) {
        return (question);
      }
    });

    const answerableQuestions = unansweredQuestions.map( (question, idx) => {
      return(
        <AnswerPageIndexItem className="answer-page"
                             question={question}
                             currentUser={this.props.currentUser}
                             createAnswer={this.props.createAnswer}
                             key={idx} />
      );
    });

    return(
      <section className="question-index">
        {answerableQuestions}
      </section>
    );
  }
}

export default AnswerPage;
