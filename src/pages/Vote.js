import React from "react";
import { candidates } from "../mock/candidates";
import CandidateCard from "../components/Vote/CandidateCard";
import Navbar from "../utils/Navbar";
import "../styles/Vote.css";
import { PAGES } from "../constants";
import { userData } from "../App";

const [login] = PAGES;

if (!localStorage.getItem("voters")) {
  localStorage.setItem("voters", JSON.stringify([]));
}

const Vote = ({ setPage }) => {
  const voters = JSON.parse(localStorage.getItem("voters"));

  let voted;
  voters.includes(userData.id) ? (voted = true) : (voted = false);

  function logout() {
    localStorage.removeItem("userData");
    setPage(login);
  }

  const userName = userData.name;

  let isAdmin;
  userData.type === "admin" ? (isAdmin = true) : (isAdmin = false);

  return (
    <div className="vote-page">
      <Navbar logout={logout} userName={userName} adminClass={isAdmin} />
      <div className="candidates-container">
        {candidates.map((candidate) => (
          <CandidateCard
            name={candidate.name}
            img={candidate.img}
            party={candidate.party}
            voted={voted}
          />
        ))}
      </div>
    </div>
  );
};

export default Vote;
