import { useState } from "react";

import { Link } from "react-router-dom";

import user from "../../Services/user.ts";

import Form from "../../components/Form";

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

  const userMethods = user();

  const handleChange = (event: any) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(registerData);

    userMethods.register(registerData);
  };

  const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "username", label: "User Name:", type: "text" },
    { name: "password", label: "Password", type: "password" },
    { name: "balance", label: "Balance:", type: "number" },
  ];

  return (
    <>
      <h1>Register</h1>

      <Form
        fields={formFields}
        onSubmit={handleSubmit}
        onChange={handleChange}
        buttonText="Register"
      />

      <p>Already registered?</p>
      <p>
        Go to <Link to="/login"> Login</Link>
      </p>
    </>
  );
};

export default Register;
