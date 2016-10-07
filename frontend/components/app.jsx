import React from 'react';
import SideBar from './functional_components/sidebar.jsx';
import HeaderContainer from './functional_components/header_container.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: "modal" };
    this.handleClick = this.handleClick.bind(this);
    this.toggleModalFocus = this.toggleModalFocus.bind(this);
  }

  toggleModalFocus() {
    if (this.state.modal === "modal") {
      this.setState({ modal: "modal focused"});
    }
    console.log(this.state);
  }

  handleClick() {
    this.setState({ modal: "modal"});
  }

  render() {
    return (
      <div className="home">
        <HeaderContainer
          toggleModalFocus={this.toggleModalFocus}
          modal={this.state.modal}/>
        <div className={this.state.modal} onClick={this.handleClick} />
        <section className="home-main group">
          <SideBar className="home-left-sidebar"/>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default App;
