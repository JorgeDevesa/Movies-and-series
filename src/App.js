import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Login from "./Components/Login";
import FavoriteMovies from "./Components/FavoriteMovies";
import MovieDetails from "./Components/MovieDetails";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      favoriteMovies: null,
      movies: [],
      showMovieDetails: null,
      favoriteMovies: []
    };
  }

  getUser = user => {
    this.setState({ ...this.state, user: user });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });

  };

  showMoviesDetails = id => {
    axios.get(`${process.env.REACT_APP_IMDB_API}&i=${id}&plot=full`).then(response => {
      this.setState({ ...this.state, showMovieDetails: response.data });
    });
  };

  returnToAllMovies = () => {
    this.setState({ ...this.state, showMovieDetails: null });
  };

  favoriteMovies = movie => {
   this.state.favoriteMovies.push(movie);
  };
  render() {
    const userAuthorization = this.state.user ? (
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Movies
              user={this.state.user}
              getUser={this.getUser}
              handleChange={this.handleChange}
              showMoviesDetails={this.showMoviesDetails}
              favoriteMovies={this.favoriteMovies}
            />
          )}
        />
        <Route
          exact
          path="/series"
          render={() => (
            <Series
              user={this.state.user}
              getUser={this.getUser}
              handleChange={this.handleChange}
              showMoviesDetails={this.showMoviesDetails}
              favoriteMovies={this.favoriteMovies}
            />
          )}
        />
        <Route
          exact
          path="/movieDetails"
          render={() => (
            <MovieDetails
              showMovieDetails={this.state.showMovieDetails}
              returnToAllMovies={this.returnToAllMovies}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <FavoriteMovies
              favoriteMovies={this.state.favoriteMovies}
              showMoviesDetails={this.showMoviesDetails}
            />
          )}
        />
      </Switch>
    ) : (
      <Route
        path="/*"
        render={() => (
          <Login
            user={this.state.user}
            getUser={this.getUser}
            handleChange={this.handleChange}
          />
        )}
      />
    );
    return <div className="App">{userAuthorization}</div>;
  }
}

export default App;
