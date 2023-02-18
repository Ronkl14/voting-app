import React from "react";

const UserRow = ({ name, email, didVote }) => {
  return (
    <div className="user-row">
      <p className="user-name">{name}</p>
      <p className="user-email">{email}</p>
      <input type="checkbox" checked={didVote} />
    </div>
  );
};

export default UserRow;
