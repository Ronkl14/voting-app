import React from "react";
import CandidateDetails from "./CandidateDetails";
import ConfirmVote from "./ConfirmVote";
import VoteButton from "./VoteButton";

const Candidate = ({ name, img, party }) => {
  return (
    <div className="candidate-card">
      <CandidateDetails name={name} img={img} party={party} />
      <VoteButton />
      <ConfirmVote />
    </div>
  );
};

export default Candidate;
