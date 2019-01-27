import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./Components/Movies";
import Login from "./Components/Login";
import Favorites from "./Components/Favorites";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: true,
      favoriteMovies: null,
      movies: []
    }
  }

  getUser = user => {
    this.setState({ ...this.state, user: user });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  render() {
    const userAuthorization = this.state.user ? (
      <Switch>
        <Route
          exact
          path="/"
          userSession={this.state.user}
          handleChange={this.handleChange}
          render={() => <Movies user={this.state.user} getUser={this.getUser} handleChange={this.handleChange}/>}

        />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>
    ) : (
      <Route
        path="/*"
        render={() => <Login user={this.state.user} getUser={this.getUser} handleChange={this.handleChange}/>}
      />
    );

    return <div className="App">{userAuthorization}</div>;
  }
}

export default App;
