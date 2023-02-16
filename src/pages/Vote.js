import React from "react";
import { candidates } from "../mock/candidates";
import CandidateCard from "../components/Vote/CandidateCard";
import "../styles/Vote.css";

const Vote = () => {
  return (
    <div className="candidates-container">
      {candidates.map((candidate) => (
        <CandidateCard
          name={candidate.name}
          img={candidate.img}
          party={candidate.party}
        />
      ))}
    </div>
  );
};

export default Vote;
