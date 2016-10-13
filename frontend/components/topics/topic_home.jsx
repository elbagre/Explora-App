import React from 'react';

class TopicHome extends React.Component {
  constructor(props) {
    super(props);
    this.questions = this.questions.bind(this);
    this.header = this.header.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleTopic(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.props.requestSingleTopic(nextProps.id);
    }
  }

  image(question) {
    if (question.image !== "/images/original/missing.png") {
      return (
        <div className="cover-photo">
          <img src={question.image} />
        </div>
      );
    }
  }

  header() {
    if (this.props.topic.topic) {
      return (
        <h1>{this.props.topic.topic.name}</h1>
      );
    }
  }

  questions() {
    if (this.props.topic.questions) {
      return (
        this.props.topic.questions.map( (question, idx) => (
          <div key={idx} className="topic-item">
            <h2>{question.title}</h2>
            <h4>{question.most_upvoted_author}</h4>
            {this.image(question)}
            <p>{question.most_upvoted_answer.body}</p>
          </div>
        ))
      );
    }
  }

  render() {
    return (
      <div className="topic-home">
        {this.header()}
        <div className="topic-container">
          {this.questions()}
        </div>
      </div>
    );
  }
}

export default TopicHome;
