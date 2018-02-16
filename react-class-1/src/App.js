import React, { Component } from "react";
import logo from "./logo.svg";
import FriendCard from "./FriendCard";
import { friends } from "./data";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = friends.reduce((acc, curr) => {
      return { ...acc, [curr.id]: false };
    }, {});
  }

  toggleChild = id => {
    this.setState({ [id]: !this.state[id] });
  };

  toggleAll = () => {
    Object.keys(this.state).map(this.toggleChild);
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleAll}> Toggle All </button>
        <ul>
          {friends.map(friend => (
            <li>
              <FriendCard
                showDetails={this.state[friend.id]}
                toggle={this.toggleChild}
                {...friend}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
