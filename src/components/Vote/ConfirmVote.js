import React from "react";

const ConfirmVote = ({ className, cancel, confirm }) => {
  return (
    <div className={className}>
      <button onClick={confirm}>Confirm</button>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
};

export default ConfirmVote;
