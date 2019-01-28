import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
export default class MovieDetails extends Component {
  render() {
    const movie = this.props.showMovieDetails;
    const showMovie = movie ? (
      <div>
        <NavBar />
        <div className="header">
          <div className="movie-details-card">
            <div className="img-details">
              <img src={movie.Poster} />
              <div className="row">
                <h3>Rating: {movie.imdbRating}</h3>
                <h3>Votes: {movie.imdbVotes}</h3>
              </div>
            </div>
            <div className="movie-details">
              <h1>{movie.Title}</h1>
              <Link to="/">
                <button>Volver</button>
              </Link>
              <p>{movie.Year}</p>
              <p>{movie.Runtime}</p>
              <p>{movie.Director}</p>
              <p>{movie.Actors}</p>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div>
          <NavBar />
          <div className="header">
            <h2>No details to show</h2>
          </div>
        </div>
      </div>
    );

    return <div>{showMovie}</div>;
  }
}
