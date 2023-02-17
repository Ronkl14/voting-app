import React from "react";
import { candidates } from "../mock/candidates";
import CandidateCard from "../components/Vote/CandidateCard";
import Navbar from "../components/Vote/Navbar";
import "../styles/Vote.css";

const Vote = () => {
  return (
    <div className="vote-page">
      <Navbar />
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <CandidateCard
            name={candidate.name}
            img={candidate.img}
            party={candidate.party}
          />
        ))}
      </div>
    </div>
  );
};

export default Vote;
