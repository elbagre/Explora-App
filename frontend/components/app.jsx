import React from 'react';
import SideBar from './functional_components/sidebar.jsx';
import HeaderContainer from './functional_components/header_container.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: "modal" };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModalFocus = this.toggleModalFocus.bind(this);
  }

  toggleModalFocus() {
    if (this.state.focus === "modal") {
      this.setState({ focus: "modal focused"});
    }
    console.log(this.state);
  }

  handleClick() {
    this.setState({ focus: "modal"});
  }

  render() {
    return (
      <div className="home">
        <HeaderContainer toggleModalFocus={this.toggleModalFocus} />
        <div className={this.state.focus} onClick={this.handleClick} />
        <section className="home-main group">
          <SideBar className="home-left-sidebar"/>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default App;
