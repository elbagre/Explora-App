import React from 'react';
import Search from '../search/search_container.js';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: "home-nav group"
    };
    this.toggleFocus = this.toggleFocus.bind(this);
    this.untoggleFocus = this.untoggleFocus.bind(this);
  }
  //
  componentWillReceiveProps(nextProps) {
    if (nextProps.modal === "modal") {
      this.untoggleFocus();
    }
  }

  handleClick(route) {
    return () => hashHistory.push(route);
  }

  untoggleFocus() {
    this.setState({ focus: "home-nav group"});
  }

  toggleFocus() {
      this.setState({ focus: "home-nav focused group" });
      this.props.toggleModalFocus();
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="home-header group">
          <nav className={this.state.focus}>
            <Search toggleFocus={this.toggleFocus}/>
            <ul className="home-links group">
              <li className="read" onClick={this.handleClick("/home")}>
                <img src="/assets/book-open-page-red.png" />
                <h4 to="/home">Read</h4>
              </li>
              <li className="answer" onClick={this.handleClick("/answer")}>
                <img src="/assets/lead-pencil-grey.png" />
                <h4 to="/answer">Answer</h4>
              </li>
              <li onClick={this.props.logout}>Logout</li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className="root-header">
          <h1>Explora</h1>
          <h3>A path to every journey</h3>
        </div>
      );
    }
  }
}

export default Header;
