import React from "react";

const LoginButton = ({ isLoading }) => {
  return (
    <button type="submit" className="btn btn-block" disabled={isLoading}>
      {isLoading ? "Loading..." : "Log In"}
    </button>
  );
};

export default LoginButton;
