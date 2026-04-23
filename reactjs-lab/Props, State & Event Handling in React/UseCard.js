// src/UserCard.js
import React from 'react';

function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default UserCard;