import React, { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={this.props.inputClass}
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
