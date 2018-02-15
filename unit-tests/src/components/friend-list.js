import React from "react";

import { Friend } from "./friend";

export const FriendList = ({ friends }) => (
  <div>
    {friends.map(friend => <Friend first={friend.first} last={friend.last} />)}
  </div>
);
