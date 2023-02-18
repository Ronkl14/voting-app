import React from "react";

const Navbar = ({ logout, userName }) => {
  return (
    <div className="navbar">
      <h3>Hello, {userName}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
