import React from 'react';
import AnswerItem from './answer_item.jsx';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleQuestion(this.props.id);
  }

  render() {
    const answers = this.props.question.answers.map( (answer, idx) => (
      <AnswerItem answer={answer} key={idx} />
    ));

    return(
      <div className="question-detail group">
        <header>
          <h2>{this.props.question.title}</h2>
          <p>{this.props.question.description}</p>
          <ul className="detail-links group">
            <li><button>Answer</button></li>
            <li><a>Comment</a></li>
            <li><a>Downvote</a></li>
          </ul>
        </header>
        <section className="question-answers">
          {answers}
        </section>
      </div>
    );
  }
}

export default QuestionDetail;
