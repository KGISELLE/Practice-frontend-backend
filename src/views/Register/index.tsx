import { useState } from "react";

import { Link } from 'react-router-dom';

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

    userMethods.register(registerData)

  };

  return (
    <>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit} onChange={handleChange} formType="register" />

      <p>Already registered?</p>
      <p>
        Go to <Link to="/login"> Login</Link>
      </p>
    </>
  );
};

export default Register;
