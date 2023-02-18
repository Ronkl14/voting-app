import React from "react";

const Navbar = ({ logout, userName, adminClass }) => {
  return (
    <div className="navbar">
      <h3>Hello, {userName}</h3>
      <button className={adminClass ? "" : "hidden"}>Admin Panel</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
