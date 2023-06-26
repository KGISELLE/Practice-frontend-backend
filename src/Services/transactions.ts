

const getUserData = (userID: any) => {
    const url = `http://localhost:4000/user/${userID}`;

     return fetch(url, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
            },
     })
        .then((response) => response.json())
        .then((data) => {
          console.log("Datos de BD:", data);
          return data;
        })
        .catch((error) => {
          console.error("Error al obtener los datos del usuario:", error);
          throw error;
        });

};

export default getUserData;
