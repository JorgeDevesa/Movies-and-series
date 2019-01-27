import React, { Component } from "react";
import "../App.css";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: {
        userName: "",
        pasword: ""
      }
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.getUser(this.state.userDetails);
  };

  render() {
    return (
      <div className="header">
        <h1 className="top title">Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="login-inputs">
            <input
              placeholder="Username"
              autoComplete="off"
              type="text"
              name="username"
              onChange={e => this.props.handleChange(e)}
            />
            <input
              placeholder="Username"
              autoComplete="off"
              type="password"
              name="password"
              onChange={e => this.props.handleChange(e)}
            />
          </div>
          <div>
            <input className="login-button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
