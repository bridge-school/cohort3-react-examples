import React, { Component } from "react";

class FriendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }
  toggleDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  render() {
    const { first, last, isBestFriend, age } = this.props;
    return (
      <div style={{ marginTop: "15px" }}>
        <div>{`${first} ${last}`}</div>
        <button onClick={this.toggleDetails}> Details: </button>
        {this.state.showDetails && (
          <div
            style={{ marginTop: "20px" }}
          >{`Age: ${age} isBestFriend: ${isBestFriend}`}</div>
        )}
      </div>
    );
  }
}

export default FriendCard;
