import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardMovie from "./CardMovie";
import axios from "axios";
import NavBar from "./NavBar";

export default class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      series: null,
      result: null,
      type: "movie"
    };
  }

  showSeries = (e, page=1) => {
    const value = e.target.value;
    const type = e.target.name;
    axios
      .get(
        `${process.env.REACT_APP_IMDB_API}&s=${value}&type=${type}&page=${page}`
      )
      .then(series => {
        if (series.data.Response)
          this.setState({
            ...this.state,
            series: series.data.Search,
            results: series.data.totalResults
          });
      })
      .catch();
  };
  render() {
    const seriesArr = this.state.series;
    const ShowseriesFound = seriesArr ? (
      <div className="container">
        {seriesArr.map((movie, index) => {
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
      <h1 className="movie-title">No se ha encontrado ningún resultado</h1>
    );


    return (
      <div>
        <NavBar />
        <header className="header">
          <h1 className="title">Series</h1>
          <SearchBox
            placeholder="Search series"
            type="text"
            showMovies={this.showSeries}
            name="series"
          />
        </header>
        {ShowseriesFound}
      </div>
    );
  }
}
