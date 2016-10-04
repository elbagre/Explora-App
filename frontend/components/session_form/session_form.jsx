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
        <label>Full Name
          <input onChange={this.handleChange("username")}
            type="text"
            value={this.state.username}/>
        </label>
      );
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.signupForm()}
        <label>Email
          <input onChange={this.handleChange("email")}
            type="text"
            value={this.state.email}/>
        </label>
        <label>Password
          <input onChange={this.handleChange("password")}
            type="password"
            value={this.state.password}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default SessionForm;
