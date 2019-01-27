import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardMovie from "./CardMovie";
import MovieDetails from "./MovieDetails";
import axios from "axios";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      movies: null,
      showMovieDetails: null
    };
  }

  showMovies = (e, page=1) => {
    const value = e.target.value;
    const type = e.target.name;
    axios
      .get(`${process.env.REACT_APP_IMDB_API}&s=${value}&type=${type}&page=${page}`)
      .then(movies => {
        if (movies.data.Response)
          this.setState({ ...this.state, movies: movies.data.Search });
      })
      .catch();
  };
  showMoviesDetails = id => {
    axios.get(`${process.env.REACT_APP_IMDB_API}&i=${id}`).then(response => {
      this.setState({ ...this.state, showMovieDetails: response.data });
      console.log(this.state.showMovieDetails);
    });
  };

  render() {
    const moviesArr = this.state.movies;
    const ShowMoviesFound = moviesArr ? (
      <div>
        {moviesArr.map((movie, index) => {
          return (
            <CardMovie
              key={index}
              movie={movie}
              showMoviesDetails={this.showMoviesDetails}
            />
          );
        })}
      </div>
    ) : (
      <h1>No se ha encontrado ningún título</h1>
    );

    const Movies = this.state.showMovieDetails ? (
      <MovieDetails 
      showMovieDetails={this.state.showMovieDetails}
      />
    ) : (
      ShowMoviesFound
    );

    return (
      <div>
        <h1>Movies</h1>
        <SearchBox
          className="input"
          placeholder="Search Movies"
          type="text"
          showMovies={this.showMovies}
          name="movie"
        />
        {Movies}
      </div>
    );
  }
}
