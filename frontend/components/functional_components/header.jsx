import React from 'react';
import Search from '../search/search_container.js';
import { Link } from 'react-router';

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
              <li><Link to="/home">Read</Link></li>
              <li><Link to="/answer">Answer</Link></li>
              <li><button onClick={this.props.logout}>Logout</button></li>
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
