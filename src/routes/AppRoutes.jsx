import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;