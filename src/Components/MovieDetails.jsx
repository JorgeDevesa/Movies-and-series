import React, { Component } from "react";

export default class MovieDetails extends Component {
  render() {
    const movie = this.props.showMovieDetails;
    return (
      <div>
       <h1>{movie.Title}</h1>
      </div>
    );
  }
}
