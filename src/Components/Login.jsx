import React, { Component } from "react";
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
  componentDidMount(){
    console.log(this.props.getUser)

}

  handleFormSubmit = e => {
    console.log(e);
    e.preventDefault();
    this.props.getUser(this.state.userDetails);
  };

  render() {

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={e => this.props.handleChange(e)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={e => this.props.handleChange(e)}
          />

          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
