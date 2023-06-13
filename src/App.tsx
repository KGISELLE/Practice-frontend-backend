import { Navigate, Routes, Route } from "react-router-dom";

import './App.css'

import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
