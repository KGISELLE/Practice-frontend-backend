import Header from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";

import { useState, useEffect } from "react";
import getUserData from "../../Services/transactions";

interface UserData {
  username: string;
  balance: string;
  id: string;
}

const Home = () => {
  const [getData, setGetData] = useState<UserData>({
    username: "",
    balance: "",
    id: "",
  });

  useEffect(() => {
    const userID = localStorage.getItem("userID");

    if (userID) {
      getUserData(userID)
        .then((userData: UserData) => {
          setGetData(userData);
        })
        .catch((error: any) => {
          throw error;
        });
    }
  }, []);

  return (
    <div>
      <Header username={getData.username}></Header>
      <Card cardTitle="Wallet Balance" balance={`$${getData.balance}`} />
      <Button color="primary" buttonText="agregar"></Button>
    </div>
  );
};

export default Home;
