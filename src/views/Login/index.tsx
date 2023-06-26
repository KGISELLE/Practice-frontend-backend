import { useState } from "react";

import { Link } from 'react-router-dom';

import user from "../../Services/user.ts";

import Form from "../../components/Form";

interface LoginData {
  name: string;
  username: string;
  password: string;
  balance: number;
}


const Login = () => {

  const [loginData, setLoginData] = useState<LoginData>({
    name: "",
    username: "",
    password: "",
    balance: 0,
  });

  const userMethods = user();

  const handleChange = (event: any) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(loginData, "loginData");

    userMethods.login(loginData)

  };
  

  return (
    <>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit} onChange={handleChange} formType="login" buttonText="Login" />

      <p>Haven't you registered yet?</p>
      <p>
        Go to <Link to="/register"> Register</Link>
      </p>
      
    </>
  );
};

export default Login;
