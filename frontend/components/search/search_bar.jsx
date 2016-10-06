import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: {
        title: "",
        author_id: this.props.currentUser.id
      },
      className: "search-container group"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.className === "search-container group") {
      this.setState({ className: "focus group"})
    } else {
      this.setState({ className: "search-container group"})
    }
  }

  handleChange(e) {
    this.setState({ question: { title: e.currentTarget.value}});
  }

  handleSubmit() {
    this.props.createQuestion(this.state.question);
  }

  render() {
    return (
      <div className={this.state.className}>
        <logo className="search-logo">Explora</logo>
        <form className="search-form group" onSubmit={this.handleSubmit}>
          <input className="search-input"
                 type="text"
                 value={this.state.title}
                 placeholder="Ask or Search Explora"
                 onClick={this.handleClick}
                 onChange={this.handleChange}/>
          <input type="submit" value="Ask Question" className="search-submit"/>
        </form>
    </div>
    );
  }
}

export default SearchBar;
