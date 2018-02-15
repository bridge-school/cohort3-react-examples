import React, { Component } from "react";
import logo from "./logo.svg";
import MyComponent from "./functional";
import TheString, { someData, otherStuff } from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showHeader: true
    };
  }

  toggleHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };

  render() {
    return (
      <div>
        {this.state.showHeader && <h1> Header! </h1>}
        Body Text
        <button onClick={this.toggleHeader}>Toggle!</button>
      </div>
    );
  }
}

export default App;
