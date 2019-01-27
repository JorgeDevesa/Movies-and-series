import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          autoComplete="off"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          name={this.props.name}
          onChange={e => this.props.showMovies(e)}
        />
      </div>
    );
  }
}
