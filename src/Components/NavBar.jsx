import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    
  render() {
    return (
      <div className="nav">
        <div />
        <div className="menu">
          <Link to="/">Movies</Link>
          <Link to="/series">Series</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    );
  }
}
