import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';


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

  //Guardar el login
  // const [loggedIn, setLoggedIn] = useState(false);

  //Guardar el valor del Id para pasarlo a user
  const [catchID, setCatchID] = useState("");

  const navigate = useNavigate();

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
      body: JSON.stringify(loginData), 
    })
      .then((response) => {
        if(response.ok) {
          return response.json()
        } else {
          throw new Error("Error en la solicitud de login");
        }
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);

        const userID = data.id;
        console.log(userID)

        setCatchID(userID);
        
        //Marcar el estado como autenticado
        // setLoggedIn(true)
        navigate("/user")
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  // if(loggedIn) {
  //   navigate("/user")
  // }
  

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
      <p>id user es {catchID}</p>

      
    </>
  );
};

export default Login;
