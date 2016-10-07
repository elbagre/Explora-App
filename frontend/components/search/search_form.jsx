import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        description: "",
        author_id: this.props.currentUser.id,
        search: "search-submit",
        describe: "describe-hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(type, e) {
    if (this.state.search === "search-submit") {
      this.setState({
        search: "search-submit true",
        [type]: e.currentTarget.value
      });
    } else {
      this.setState({
        [type]: e.currentTarget.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.toggleFocus();
    this.props.createQuestion({
      title: this.state.title,
      description: this.state.description,
      author_id: this.state.author_id
    });
    this.setState({
      title: "",
      description: "",
      search: "search-submit",
      describe: "describe-hidden"
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="group">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <logo className="search-logo">Explora</logo>
          <input className="search-input"
                 type="text"
                 value={this.state.title}
                 placeholder="Ask or Search Explora"
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
