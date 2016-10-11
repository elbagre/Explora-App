import React from 'react';
import AnswerItem from './answer_item.jsx';
import AnswerForm from './answer_form.jsx';

class QuestionDetail extends React.Component {

  componentDidMount() {
    this.props.fetchSingleQuestion(this.props.id);
  }

  componentWillReceiveProps(newProps) {
    if (parseInt(newProps.params.id) !== this.props.question.id) {
      this.props.fetchSingleQuestion(this.props.id);
    }
  }

  render() {
    const answers = this.props.question.answers.map( (answer, idx) => (
      <AnswerItem
        answer={answer}
        requestAllComments={this.props.requestAllComments}
        key={idx} />
    ));

    return(
      <div className="question-detail">
        <header>
          <h2>{this.props.question.title}</h2>
          <p>{this.props.question.description}</p>
          <ul className="detail-links">
            <li><a>Follow</a></li>
            <li><a>Downvote</a></li>
          </ul>
        </header>
        <AnswerForm
          currentUser={this.props.currentUser}
          id={this.props.id}
          createAnswer={this.props.createAnswer}/>
        <section className="answer-list">
          <h4>{answers.length} Answers</h4>
          {answers}
        </section>
      </div>
    );
  }
}

export default QuestionDetail;
