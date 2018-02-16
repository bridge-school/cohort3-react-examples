import React, { Component } from "react";

const FriendCard = props => {
  const { id, first, last, isBestFriend, age, showDetails, toggle } = props;
  return (
    <div style={{ marginTop: "15px" }}>
      <div>{`${first} ${last}`}</div>
      <button onClick={() => toggle(id)}> Details: </button>
      {showDetails && (
        <div
          style={{ marginTop: "20px" }}
        >{`Age: ${age} isBestFriend: ${isBestFriend}`}</div>
      )}
    </div>
  );
};

export default FriendCard;
