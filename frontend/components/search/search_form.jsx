import React from 'react';
import { hashHistory } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        description: "",
        query: "",
        author_id: this.props.currentUser.id,
        search: "search-submit",
        describe: "describe-hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.querySearch = this.querySearch.bind(this);
    this.clearForms = this.clearForms.bind(this);
  }

  home() {
    hashHistory.push('/home');
  }

  querySearch() {
    this.props.requestMatches(this.state.query);
  }

  handleClick(type) {
    if (type === "toggle") {
      this.state.describe === "describe-hidden" ?
      this.setState({ describe: "describe-toggled"}) :
      this.setState({ describe: "describe-hidden"});
    } else {
      this.props.toggleFocus();
    }
  }

  clearForms() {
    this.setState({
      query: "" ,
      title: "",
      description: "",
      describe: "describe-hidden"
    })
  }

  handleChange(type, e) {
    if (type === "description") {
      this.setState({
        [type]: e.currentTarget.value
      });
    } else {
      this.setState({
        query: e.currentTarget.value,
        [type]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createQuestion({
      title: this.state.title,
      description: this.state.description,
      author_id: this.state.author_id
    });
    this.clearForms();
  }

  render() {
    return (
      <div className="group">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <logo onClick={this.home} className="search-logo">Explora</logo>
          <input className="search-input"
                 type="text"
                 value={this.state.title}
                 placeholder="Ask or Search Explora"
                 onKeyUp={this.querySearch}
                 onClick={this.handleClick.bind(this)}
                 onChange={this.handleChange.bind(this, "title")}/>
         <input type="submit" value="Ask Question" className={this.state.search}/>
        </form>
        <button className="toggle" onClick={this.handleClick.bind(this, "toggle")}>v</button>
        <textarea className={this.state.describe}
          type="text"
          placeholder="Enter Question Details (Optional)"
          onChange={this.handleChange.bind(this, "description")}
          value={this.state.description}/>
      </div>
    );
  }
}

export default SearchBar;
