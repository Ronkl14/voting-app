import React from "react";

const VoteButton = ({ onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      Vote
    </button>
  );
};

export default VoteButton;
