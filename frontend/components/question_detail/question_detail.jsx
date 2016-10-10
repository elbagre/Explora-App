import React from 'react';
import AnswerItem from './answer_item.jsx';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      answer: "",
      toggle: "answer-box"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggle() {
    if (this.state.toggle === "answer-box") {
      this.setState({ toggle: "answer-box toggled" });
    } else {
      this.setState({ toggle: "answer-box"});
    }
  }

  componentDidMount() {
    this.props.fetchSingleQuestion(this.props.id);
  }

  componentDidReceiveProps() {
    this.props.fetchSingleQuestion(this.props.id);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnswer({
      body: this.state.answer,
      question_id: this.props.id,
      author_id: this.props.currentUser.id
    });
    this.setState({
      answer: "",
      toggle: "answer-box",
    });
  }

  render() {
    console.log(this.state);
    const answers = this.props.question.answers.map( (answer, idx) => (
      <AnswerItem answer={answer} currentUser={this.props.currentUser} key={idx} />
    ));

    return(
      <div className="question-detail">
        <header>
          <h2>{this.props.question.title}</h2>
          <p>{this.props.question.description}</p>
          <ul className="detail-links">
            <li><button onClick={this.handleToggle}>Answer</button></li>
            <li><a>Comment</a></li>
            <li><a>Downvote</a></li>
          </ul>
        </header>
        <div className={this.state.toggle}>
          <form className="answer-form" onSubmit={this.handleSubmit}>
            <div className="answer-header group">
              <div>
                <span />
                <h5>{this.props.currentUser.username}</h5>
              </div>
              <a>Add Bio</a>
            </div>
            <textarea className="answer-bio"
              onChange={this.handleChange("bio")}
              value={this.state.bio} />
            <textarea className="answer-input"
              onChange={this.handleChange("answer")}
              placeholder="Write your answer"
              value={this.state.answer} />
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        <section className="answer-list">
          {answers}
        </section>
      </div>
    );
  }
}

export default QuestionDetail;
