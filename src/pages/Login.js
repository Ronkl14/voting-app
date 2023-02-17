import React from "react";
import FormRow from "../components/Login/FormRow";
import "../styles/Login.css";
import LoginButton from "../components/Login/LoginButton";
import { useState } from "react";
import { validateEmail } from "../utils/validateEmail";

const Login = ({ setPage }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [emailError, setEmailError] = useState({
    isError: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState({
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    setEmailError({
      isError: false,
      message: "",
    });
    setPasswordError({
      isError: false,
      message: "",
    });
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { email, password } = values;

    if (!email || validateEmail(email)) {
      const message = "Please enter a valid email";
      setEmailError({
        isError: true,
        message,
      });
    } else {
      setEmailError({
        isError: false,
        message: "",
      });
    }

    if (!password) {
      const message = "Please enter a password";
      setPasswordError({
        isError: true,
        message,
      });
    } else {
      setPasswordError({
        isError: false,
        message: "",
      });
    }

    if (!email || validateEmail(email) || !password) {
      setIsLoading(false);
      return;
    } else {
      localStorage.setItem("userData", JSON.stringify(values));

      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onSubmit}>
        <FormRow
          type="email"
          name="email"
          error={emailError.isError}
          value={values.email}
          handleChange={handleChange}
        />
        {emailError.isError && <small>{emailError.message}</small>}
        <FormRow
          type="password"
          name="password"
          error={passwordError.isError}
          value={values.password}
          handleChange={handleChange}
        />
        {passwordError.isError && <small>{passwordError.message}</small>}
        <LoginButton isLoading={isLoading} />
      </form>
    </div>
  );
};

export default Login;
