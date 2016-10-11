import React from 'react';

class AnswerForm extends React.Component {
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
    return (
      <section className="detail-page-answer">
        <img src="assets/lead-pencil-grey.png" />
        <h4>Can you answer this question?</h4>
        <button onClick={this.handleToggle}>Answer</button>
        <div className={this.state.toggle}>
          <form className="hidden-form" onSubmit={this.handleSubmit}>
            <div>
              <span />
              <div>
                <h5>{this.props.currentUser.username}</h5>
                <a>Add Bio</a>
              </div>
            </div>
            <textarea className="answer-bio"
              onChange={this.handleChange("bio")}
              value={this.state.bio} />
            <textarea className="answer-input"
              onChange={this.handleChange("answer")}
              placeholder="Write your answer"
              value={this.state.answer} />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </section>
    );
  }
}

export default AnswerForm;
