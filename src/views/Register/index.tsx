import { useState } from "react";

import { Link } from "react-router-dom";

interface RegisterData {
  name: string; //
  username: string;
  password: string;
  balance: number; //
}

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    username: "",
    password: "",
    balance: 0,
  });

  const handleChange = (event: any) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(registerData);

    // Realizar la llamada al API
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tipo de contenido que se enviará en el body
      },
      body: JSON.stringify({
        ...registerData,
        balance: Number(registerData.balance),
      }), // Conviete el objeto registerData a un JSON
    })
      .then((response) => response.json()) // Interpretar la respuesta como JSON
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
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
          type="submit"
          style={{ backgroundColor: "#646CFF", color: "white", margin: "10px" }}
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