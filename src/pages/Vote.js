import React from "react";
import { candidates } from "../mock/candidates";
import CandidateCard from "../components/Vote/CandidateCard";
import Navbar from "../components/Vote/Navbar";
import "../styles/Vote.css";
import { PAGES } from "../constants";

const [login] = PAGES;

const Vote = ({ setPage }) => {
  function logout() {
    localStorage.removeItem("userData");
    setPage(login);
  }

  return (
    <div className="vote-page">
      <Navbar logout={logout} />
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
