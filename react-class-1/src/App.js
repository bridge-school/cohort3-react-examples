import React, { Component } from "react";
import logo from "./logo.svg";
import FriendCard from "./FriendCard";
import { friends } from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: ""
    };
  }

  componentWillMount() {
    this.myTimer = setInterval(() => {
      console.log("Test");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Im unmounting :(");
    clearInterval(this.myTimer);
  }
  render() {
    console.log("Render!");
    const { username, email } = this.state;
    return <div>{`${username} ${email}`}</div>;
  }
}

export default App;
