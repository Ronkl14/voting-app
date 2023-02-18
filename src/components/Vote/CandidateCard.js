import React from "react";
import CandidateDetails from "./CandidateDetails";
import ConfirmVote from "./ConfirmVote";
import VoteButton from "./VoteButton";
import { useState } from "react";
import { userData } from "../../App";

const Candidate = ({ name, img, party, voted }) => {
  const [hide, setHide] = useState(true);

  function voteClick() {
    setHide(false);
  }

  function confirmClick() {
    let voters = JSON.parse(localStorage.getItem("voters"));
    voters.push(userData.id);
    localStorage.setItem("voters", JSON.stringify(voters));
    window.location.reload(false);
  }

  function cancelClick() {
    setHide(true);
  }

  return (
    <div className="candidate-card">
      <CandidateDetails name={name} img={img} party={party} />
      {!voted ? (
        <div className="candidate-vote-btns">
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
      ) : (
        <p>Thanks for voting</p>
      )}
    </div>
  );
};

export default Candidate;
