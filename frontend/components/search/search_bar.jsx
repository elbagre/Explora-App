import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.currentTarget.value});
  }

  handleSubmit() {
    this.props.createQuestion(this.state);
  }

  render() {
    return (
      <div className="search-container group">
        <p>Ask or Search Explora</p>
        <form className="search-form group" onSubmit={this.handleSubmit}>
          <input className="search-input" type="text" value={this.state.title} onChange={this.handleChange}/>
          <input type="submit" value="Ask Question" className="search-submit"/>
        </form>
    </div>
    );
  }
}

export default SearchBar;
