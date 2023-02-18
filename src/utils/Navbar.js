import React from "react";

const Navbar = ({ logout, userName, adminClass, setPage }) => {
  return (
    <div className="navbar">
      <h3>Hello, {userName}</h3>
      <button className={adminClass ? "" : "hidden"} onClick={setPage}>
        Admin Panel
      </button>
      <button onClick={logout} className="btn logout">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
