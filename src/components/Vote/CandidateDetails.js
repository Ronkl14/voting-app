import React from "react";

const CandidateDetails = ({ name, img, party }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="candidate-img">
        <img src={img} alt="candidate img"></img>
      </div>
    </div>
  );
};

export default CandidateDetails;
