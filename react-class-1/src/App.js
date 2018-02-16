import React, { Component } from "react";
import logo from "./logo.svg";
import FriendCard from "./FriendCard";
import { friends } from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          {friends.map(friend => (
            <li>
              <FriendCard {...friend} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
