import React, { Component } from 'react'
export default class CardMovie extends Component {
  render() {
      const movie = this.props.movie
    return (
      <div>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster}/>
        <button onClick={()=> this.props.showMoviesDetails(movie.imdbID)}>Ver detalles</button>
      </div>
    )
  }
}
