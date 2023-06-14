// import { useEffect } from "react";

// import { Link } from "react-router-dom";

const User = () => {
//   const [currentBalance, setCurrentBalance] = useState(0);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:4000/user/:id", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json", // Tipo de contenido que se enviará en el body
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json(); // Interpretar la respuesta como JSON
//         } else {
//           throw new Error("Error en el registro");
//         }
//       })
//     //   .then((data) => {
//     //     console.log("Respuesta de la API:", data);
//     //     const { name, balance } = data;
//     //     console.log("Name: ", name);
//     //     setName(name);
//     //     console.log("Balance: ", balance);
//     //     setCurrentBalance(currentBalance);
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error al llamar a la API:", error);
//     //   });
//   }, []);

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
};

export default User;
