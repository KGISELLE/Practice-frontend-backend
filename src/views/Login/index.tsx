import { useState } from "react";

import { Link } from "react-router-dom";

import user from "../../Services/user.ts";

import Form from "../../components/Form";

interface LoginData {
  username: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const userMethods = user();

  const handleChange = (event: any) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(loginData, "loginData");

    userMethods.login(loginData);
  };

  const formFields = [
    { name: "username", label: "User Name:", type: "text" },
    { name: "password", label: "Password:", type: "password" },
  ];

  return (
    <>
      <h1>Login</h1>

      <Form
        fields={formFields}
        onSubmit={handleSubmit}
        onChange={handleChange}
        buttonText="Login"
      />

      <p>Haven't you registered yet?</p>
      <p>
        Go to <Link to="/register"> Register</Link>
      </p>
    </>
  );
};

export default Login;
