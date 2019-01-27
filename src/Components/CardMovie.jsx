import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CardMovie extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="card">
        <div className="title-container">
          <h3 className="movie-title">{movie.Title}</h3>
        </div>
        <div className="img-container">
          <img src={movie.Poster} />
        </div>
        <Link to="/movieDetails">
          <button onClick={() => this.props.showMoviesDetails(movie.imdbID)}>
            Ver detalles
          </button>
        </Link>
      </div>
    );
  }
}
