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


