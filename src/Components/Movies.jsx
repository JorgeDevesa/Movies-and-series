import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardMovie from "./CardMovie";
import axios from "axios";
import NavBar from "./NavBar";
export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      movies: null,
      result: null,
      type: "movie"
    };
  }

  showMovies = (e, page=1) => {
    const value = e.target.value;
    const type = e.target.name;
    axios
      .get(
        `${process.env.REACT_APP_IMDB_API}&s=${value}&type=${type}&page=${page}`
      )
      .then(movies => {
        if (movies.data.Response)
          this.setState({
            ...this.state,
            movies: movies.data.Search,
            results: movies.data.totalResults
          });
      })
      .catch();
  };

  render() {
    const moviesArr = this.state.movies;
    const ShowMoviesFound = moviesArr ? (
      <div className="container">
        {moviesArr.map((movie, index) => {
          return (
            <CardMovie
              key={index}
              movie={movie}
              favoriteMovies={this.props.favoriteMovies}
              showMoviesDetails={this.props.showMoviesDetails}
            />
          );
        })}
      </div>
    ) : (
      <h1 className="movie-title">No results</h1>
    );


    return (
      <div>
        <NavBar />
        <header className="header">
          <h1 className="title">Movies</h1>
          <SearchBox
            placeholder="Search Movies"
            type="text"
            showMovies={this.showMovies}
            name="movie"
          />
        </header>
        {ShowMoviesFound}
      </div>
    );
  }
}
