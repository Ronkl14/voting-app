import React from "react";
import FormRow from "../components/Login/FormRow";
import "../styles/Login.css";
import LoginButton from "../components/Login/LoginButton";
import { useState } from "react";
import { users } from "../mock/users";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [userNotFoundError, setUserNotFoundError] = useState({
    isError: false,
    message: "",
  });

  const handleChange = (e) => {
    setUserNotFoundError(false);
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { email, password } = values;

    const userObj = users.filter((user) => user.email === email);

    if (userObj.length === 0) {
      const message = "Email or password is incorrect";
      setIsLoading(false);
      setUserNotFoundError({
        isError: true,
        message,
      });
    } else {
      const passwordMatch = userObj[0].password === password;
      if (!passwordMatch) {
        setIsLoading(false);
        const message = "Email or password is incorrect";
        setUserNotFoundError({
          isError: true,
          message,
        });
      } else {
        localStorage.setItem("userData", JSON.stringify(userObj[0]));

        setTimeout(() => {
          window.location.reload(false);
        }, 2000);
      }
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onSubmit}>
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {userNotFoundError.isError && (
          <small>{userNotFoundError.message}</small>
        )}
        <LoginButton isLoading={isLoading} />
      </form>
    </div>
  );
};

export default Login;
