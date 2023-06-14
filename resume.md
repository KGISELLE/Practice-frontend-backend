function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/#:~:text=C%C3%B3mo%20instalar%20React%20Router,%2Drouter%2Ddom%406%20.


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
https://bobbyhadz.com/blog/react-export-usehistory-was-not-found-in-react-router-dom


//   Realizar la llamada al API
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