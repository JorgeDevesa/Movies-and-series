import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom"

class App extends Component {


  render() {
      
    return (
      <div className="App">
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
