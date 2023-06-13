import { useState } from "react";

import { Link } from 'react-router-dom';

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
    balance: 0, //
  });

  const handleChange = (event: any) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(loginData, "loginData");

    // Realizar la llamada al API //EL FETCH DEBE HACERSE DENTRO EL SERVICIO DE USUARIOS
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...loginData,
        balance: Number(loginData.balance),
      }), 
    })
      .then((response) => response.json()) // Interpretar la respuesta como JSON
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>User name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={loginData.name}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>

      <p>Haven't you registered yet?</p>
      <p>
        Go to <Link to="/register"> Register</Link>
      </p>
    </>
  );
};

export default Login;
