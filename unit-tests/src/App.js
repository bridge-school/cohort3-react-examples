import React, { Component } from "react";

import { FriendList } from "./components/friend-list";
import logo from "./logo.svg";
import "./App.css";

const data = [
  {
    first: "Heath",
    last: "Richmond",
    age: 27,
    isBestFriend: true
  },
  {
    first: "Cox",
    last: "Estrada",
    age: 27,
    isBestFriend: true
  },
  {
    first: "Norma",
    last: "Mccoy",
    age: 35,
    isBestFriend: false
  },
  {
    first: "Wallace",
    last: "Montoya",
    age: 27,
    isBestFriend: false
  },
  {
    first: "Concepcion",
    last: "Mccarthy",
    age: 22,
    isBestFriend: true
  },
  {
    first: "Albert",
    last: "Wade",
    age: 25,
    isBestFriend: true
  },
  {
    first: "Sykes",
    last: "Gonzalez",
    age: 29,
    isBestFriend: false
  },
  {
    first: "Alisa",
    last: "Ryan",
    age: 30,
    isBestFriend: true
  },
  {
    first: "Holmes",
    last: "Bright",
    age: 28,
    isBestFriend: false
  },
  {
    first: "Estrada",
    last: "Pittman",
    age: 25,
    isBestFriend: false
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Friends</h1>
        <FriendList friends={data} />
        <h1>Best Friends</h1>
        <FriendList friends={data.filter(friend => friend.isBestFriend)} />
      </div>
    );
  }
}

export default App;
