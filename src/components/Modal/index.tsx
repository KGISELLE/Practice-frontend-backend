import { useState } from "react";

import Form from "../Form";

interface ModalProps {
  message: string;
  // modalType: "income" | "withdraw";
  buttonText: string;
  formFields: any;
  onClose: (event: any) => void;
  onSubmit: (event: any) => void;
}

const Modal = ({
  message,
  formFields,
  buttonText,
//   onClose,
    onSubmit,
}: ModalProps) => {
  const [amount, setAmount] = useState<string>("");

  const handleAmountChange = (event: any) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Aquí puedes realizar acciones con el monto y comentario ingresados, como enviarlos al servidor o realizar operaciones
    onSubmit(amount);
    // Luego, puedes cerrar el modal
    // onClose();
  };

//   const formFields = [
//     { name: "amount", label: "Amount:", type: "string" },
//   ];

  return (
    <div>
      <p>{message}</p>
      <Form
        fields={formFields}
        onSubmit={handleSubmit}
        onChange={handleAmountChange}
        buttonText={buttonText}
      />
    </div>
  );
};

export default Modal;
