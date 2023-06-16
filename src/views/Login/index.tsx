import { useState } from "react";

import { Link } from 'react-router-dom';

import user from "../../Services/user.ts";

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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexFlow: "column" }}>
        <label style={{ margin: "10px" }}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <label htmlFor="password" style={{ margin: "10px" }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button 
          type="submit"
          style={{ backgroundColor: "#646CFF", color: "white", margin: "10px" }}
        >
          Login
        </button>
      </form>

      <p>Haven't you registered yet?</p>
      <p>
        Go to <Link to="/register"> Register</Link>
      </p>
      
    </>
  );
};

export default Login;
