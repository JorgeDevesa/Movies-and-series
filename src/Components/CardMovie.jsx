import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CardMovie extends Component {
  constructor() {
    super();
    this.state = {
      favoriteToggle: "images/crz-empty.png"
    };
  }
  favoriteToggle = () => {
    this.setState({ ...this.state, favoriteToggle: "images/crz-relleno.png" });
  };
  
  render() {
    const movie = this.props.movie;
    const favoriteHeart = this.props.eliminateAction ? 
    (<div></div>) :
    (
      <img
      className="favorite"
      src={this.state.favoriteToggle}
      onClick={() => {
        this.favoriteToggle();
        this.props.favoriteMovies(movie);
      }}
    />
    )
    return (
      <div className="card">
        <div className="title-container">
          <h3 className="movie-title">{movie.Title}</h3>
        </div>
        <div className="img-container">
          <img src={movie.Poster} />
        </div>
        <div className="row">
          <Link to="/movieDetails">
            <button onClick={() => this.props.showMoviesDetails(movie.imdbID)}>
              Ver detalles
            </button>
          </Link>
          {favoriteHeart}
        </div>
      </div>
    );
  }
}
