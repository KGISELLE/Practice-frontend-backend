import { useState } from "react";

import { Link } from "react-router-dom";

import user from "../../Services/user.ts";

interface RegisterData {
  name: string; 
  username: string;
  password: string;
  balance: number;
}

const Register = () => {

  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    username: "",
    password: "",
    balance: 0,
  });

  
  const userMethods = user();

  const handleChange = (event: any) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(registerData);

    userMethods.register(registerData)

  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexFlow: "column" }}>
        <label htmlFor="user" style={{ margin: "10px" }}>
          User:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={registerData.name}
          onChange={handleChange}
        />
        <label htmlFor="username" style={{ margin: "10px" }}>
          User Name:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={registerData.username}
          onChange={handleChange}
        />
        <label htmlFor="password" style={{ margin: "10px" }}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />
        <label htmlFor="balance" style={{ margin: "10px" }}>
          Balance:
        </label>
        <input
          type="number"
          id="balance"
          name="balance"
          value={registerData.balance}
          onChange={handleChange}
        />
        <button
          style={{ backgroundColor: "#646CFF", color: "white", margin: "10px" }}
          type="submit"
        >
          Register
        </button>
      </form>

      <p>Already registered?</p>
      <p>
        Go to <Link to="/login"> Login</Link>
      </p>
    </>
  );
};

export default Register;
