import { Navigate, Routes, Route } from "react-router-dom";

import './App.css'

import Login from "./views/Login";
import Register from "./views/Register";
import User from "./Services/User"

function App() {
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={< User />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
