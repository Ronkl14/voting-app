import React from "react";
import FormRow from "../components/Login/FormRow";
import "../styles/Login.css";
import LoginButton from "../components/Login/LoginButton";

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <LoginButton />
      </form>
    </div>
  );
};

export default Login;
