import React from 'react';

class GuestButton extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.login(this.props.user);
  }

  render () {
    return (
    <button className="guest" onClick={this.handleClick}>Guest Account</button>
    );
  }
}

export default GuestButton;
