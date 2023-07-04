import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

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

  const [isModalopen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [bottonAction, setBottonAction] = useState<
    ((data: any) => void) | null
  >(null);

  const openModal = (message: string, action: (data: any) => void) => {
    console.log("hola")
    setIsModalOpen(true);
    setModalMessage(message);
    setBottonAction(action);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleIncomeSubmit = (data: any) => {
    // Realizar acciones con los datos de ingresos
    console.log(data);
    closeModal();
  };

  const handleWithdrawSubmit = (data: any) => {
    // Realizar acciones con los datos de egresos
    console.log(data);
    closeModal();
  };

  const handleFormSubmit = (data: any) => {
    if (bottonAction) {
      bottonAction(data);
      closeModal();
    }
  };

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

  const formFields = [{ name: "amount", label: "Amount:", type: "number" }];

  return (
    <div>
      <Header username={getData.username}></Header>
      <Card cardTitle="Wallet Balance" balance={`$${getData.balance}`} />

      <Button
        variant="income"
        buttonText="+ Income"
        onClick={() =>
          openModal("Enter the amount to deposit", handleIncomeSubmit)
        }
      ></Button>
      <Button
        variant="withdraw"
        buttonText="- Withdraw"
        // onClick={() => {
        //   console.log("hola")
        //   openModal("Enter the amount to withdraw", handleWithdrawSubmit)
        // }
        // }
        onClick={() => console.log("hola")}
      ></Button>

      {isModalopen && (
        <Modal
          formFields={formFields}
          message={modalMessage}
          onClose={closeModal}
          onSubmit={handleFormSubmit}
          buttonText="Confirm Transaction"
        />
      )}
    </div>
  );
};

export default Home;
