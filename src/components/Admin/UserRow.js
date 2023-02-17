import React from "react";

const UserRow = ({ name, email, didVote }) => {
  return (
    <div className="user-row">
      <p>{name}</p>
      <p>{email}</p>
      <input type="checkbox" checked={didVote} />
    </div>
  );
};

export default UserRow;
