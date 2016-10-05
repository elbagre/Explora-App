import { hashHistory } from 'react-router';
import React from 'react';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  signupForm() {
    if (this.props.formType === 'signup') {
      return (
        <div>
        <label>Full Name:</label>
          <input onChange={this.handleChange("username")}
            type="text"
            value={this.state.username}/>
        </div>
      );
    }
  }

  render () {
    return (
      <form className="register-form group" onSubmit={this.handleSubmit}>
        {this.signupForm()}
        <label>Email:</label>
          <input onChange={this.handleChange("email")}
            type="text"
            value={this.state.email}/>
          <label>Password:</label>
          <input onChange={this.handleChange("password")}
            type="password"
            value={this.state.password}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default SessionForm;
