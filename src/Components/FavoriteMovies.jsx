import React, { Component } from "react";
import NavBar from "./NavBar";
import CardMovie from "./CardMovie";
export default class FavoriteMovies extends Component {
  render() {

    const favoriteMovies = this.props.favoriteMovies
    const favoriteCards = favoriteMovies.length>0 ? 
    (
      <div className="favorites-container">
      {favoriteMovies.map((movie, index)=>{
          return (
            <CardMovie
              key={index}
              movie={movie}
              favoriteseries={this.props.favoriteseries}
              showMoviesDetails={this.props.showMoviesDetails}
              eliminateAction={true}
            />
          );
      })}
      </div>
    ) : (
      <h3>The are not favorite movies yet</h3>
    )
    return (
      <div>
        <NavBar />
        <div className="header">
          <h1 className="title">Favorites</h1>
          {favoriteCards}
        </div>
      </div>
    );
  }
}
