import { useNavigate } from 'react-router-dom';

interface UserMethods {
  register(userData: any): void;
  login(userData: any): void;
}

const user = (): UserMethods => {

  const navigate = useNavigate();

  //?Register Method - API Call
  const register = (userData: any) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tipo de contenido que se enviará en el body
      },
      body: JSON.stringify({
        ...userData,
        balance: Number(userData.balance),
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
        return data;
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  //?Login Method - API Call
  const login = (userData: any) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), 
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
        
        // navigate("/home")
        return data
      })
      .catch((error) => {
        console.error("Error al llamar a la API:", error);
      });
  };

  return {
    register,
    login
  }

};

export default user;