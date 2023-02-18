import React from "react";

const ConfirmVote = ({ className, cancel, confirm }) => {
  return (
    <div className={className}>
      <button onClick={confirm} className="btn">
        Confirm
      </button>
      <button onClick={cancel} className="btn">
        Cancel
      </button>
    </div>
  );
};

export default ConfirmVote;
