```
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
```

https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/#:~:text=C%C3%B3mo%20instalar%20React%20Router,%2Drouter%2Ddom%406%20.

```
const handleChange = (event: any) => {
    let value: (typeof registerData) [keyof typeof registerData] = event.target.value;

    setRegisterData({
      ...registerData,
      [event.target.name] : value,
    });
    
    
  };
  console.log(registerData);


 const handleChange = (event: any) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

useNavigate
```

https://bobbyhadz.com/blog/react-export-usehistory-was-not-found-in-react-router-dom

//   Realizar la llamada al API
```
//   fetch("http://localhost:4000/user/:id", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json", // Tipo de contenido que se enviará en el body
//     },
//   })
//     .then((response) => {
//       if(response.ok) {
//         return response.json() // Interpretar la respuesta como JSON
//       } else {
//         throw new Error("Error en el registro");
//       }
//     })
//     .then((data) => {
//       console.log("Respuesta de la API:", data);
//       const { name, balance } = data;
//       console.log("Name: ", name );
//       console.log("Balance: ", balance);
//     })
//     .catch((error) => {
//       console.error("Error al llamar a la API:", error);
//     });
```

//usando redirection useState
```
// const [redirectToLogin, setRedirectToLogin] = useState(false)
// setRedirectToLogin(true);
// if (redirectToLogin) {
//   return <Link to="/login">successful registration go to login</Link>; // Redireccionar a la vista de login
// }
```

```
//Pagina home
return (
    <>
      <div>
        {/* <h2>welcome {name}</h2> */}
        <h2>welcome </h2>
        {/* <p>Your balance to date is {currentBalance}</p> */}
        <p>Your balance to date is </p>
        <div>
          <button>+ Income</button>
          <button>- Expense</button>
        </div>
        <p>
          {/* Go to <Link to="/register"> Transactions</Link> */}
          Transaction History
        </p>
      </div>
    </>
  );
```



//version anterior de la vista register
```
import { useState } from "react";

import { Link } from "react-router-dom";

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

  const navigate = useNavigate();

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
      .then((response) => {
        if(response.ok) {
          navigate("/login")
          return response.json() // Interpretar la respuesta como JSON
        } else {
          throw new Error("Error en el registro");
        }
      })
      .then((data) => {
        console.log("Respuesta de la API:", data);
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });

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
```




//componente login co la logica incluida


```
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
        
        navigate("/user")
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
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
      <p>id user es {catchID}</p>

      
    </>
  );
};

export default Login;
```



