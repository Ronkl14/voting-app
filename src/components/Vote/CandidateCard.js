import React from "react";
import CandidateDetails from "./CandidateDetails";
import ConfirmVote from "./ConfirmVote";
import VoteButton from "./VoteButton";
import { useState } from "react";
import { userData } from "../../App";
import { users } from "../../mock/users";

const Candidate = ({ name, img, party }) => {
  const [hide, setHide] = useState(true);

  function voteClick() {
    setHide(false);
  }

  function confirmClick() {
    if (localStorage.getItem("voters")) {
      let voters = JSON.parse(localStorage.getItem("voters"));
      voters.push(userData.id);
      localStorage.setItem("voters", JSON.stringify(voters));
    } else {
      let voters = [userData.id];
      localStorage.setItem("voters", JSON.stringify(voters));
    }
  }

  function cancelClick() {
    setHide(true);
  }

  return (
    <div className="candidate-card">
      <CandidateDetails name={name} img={img} party={party} />
      <VoteButton
        onClick={voteClick}
        className={`vote ${!hide ? "hidden" : ""}`}
      />
      <ConfirmVote
        className={`confirm-vote ${hide ? "hidden" : ""}`}
        cancel={cancelClick}
        confirm={confirmClick}
      />
    </div>
  );
};

export default Candidate;
