import React from "react";

const CandidateDetails = ({ name, img, party }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt="candidate img" />
      <p>Party: {party}</p>
    </div>
  );
};

export default CandidateDetails;
