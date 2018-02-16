import React, { Component } from "react";

const FriendCard = props => {
  const { first, last } = props;
  return (
    <div>
      <div>{`${first} ${last}`}</div>
    </div>
  );
};

export default FriendCard;
