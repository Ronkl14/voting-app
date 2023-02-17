import React from "react";
import UserRow from "../components/Admin/UserRow";
import { users } from "../mock/users.js";
import "../styles/Admin.css";

const Admin = () => {
  return (
    <div>
      {users.map((user) => (
        <UserRow name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default Admin;
