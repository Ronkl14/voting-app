import React from "react";
import UserRow from "../components/Admin/UserRow";
import { users } from "../mock/users.js";
import "../styles/Admin.css";
import Navbar from "../utils/Navbar";
import { userData } from "../App";
import { PAGES } from "../constants";
import { voters } from "./Vote";
const [login] = PAGES;

const Admin = ({ setPage }) => {
  function logoutPage() {
    localStorage.removeItem("userData");
    setPage(login);
  }

  const userName = userData.name;
  return (
    <div className="admin-panel">
      <Navbar logout={logoutPage} userName={userName} />
      <h2>
        Total votes: {voters.length}/{users.length}
      </h2>
      <div>
        {users.map((user) => (
          <UserRow
            name={user.name}
            email={user.email}
            didVote={voters.includes(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
