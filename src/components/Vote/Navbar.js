import React from "react";

const Navbar = ({ logout }) => {
  return (
    <div className="navbar">
      <h3>Hello, NAME</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
