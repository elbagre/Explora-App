import React from 'react';

class AnswerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      answer: "",
      imageFile: null,
      imageUrl: null,
      toggle: "answer-box"
    };
    this.bold = this.bold.bind(this);
    this.italic = this.italic.bind(this);
    this.list = this.list.bind(this);
    this.updateFile = this.updateFile.bind(this);
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

  bold() {
    if (this.state.bold === "bold") {
      this.setState({ bold: "bold" });
    } else {
      this.setState({ bold: ""});
    }
  }

  italic() {
    if (this.state.italic === "") {
      this.setState({ italic: "italic" });
    } else {
      this.setState({ italic: "" });
    }
  }

  list() {
    if (this.state.list === "") {
      this.setState({ list: "list"});
    } else {
      this.setState({ italic: ""});
    }
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.props.id;
     const formData = new FormData();

     if (this.state.imageFile !== null) {
       formData.append("answer[image]", this.state.imageFile);
     }
     formData.append("answer[body]", this.state.answer);
     formData.append("answer[question_id]", this.props.id);
     formData.append("answer[author_id]", this.props.currentUser.id);

    this.props.createAnswer(formData);

    this.setState({
      answer: "",
      toggle: "answer-box",
    });
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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
            <ul className="form-style">
              <li onClick={this.bold}>B</li>
              <li onClick={this.italic}>I</li>
              <li onClick={this.list}>List</li>
              <li><input type="file"
                         onChange={this.updateFile} /></li>
            </ul>
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

// <div className="form-style">
// // <ul>
// // </ul>
//
// </div>
