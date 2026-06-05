import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { Course } from "../pages/courses/Course";
import { useState } from "react";
const AppRoutes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      {isLoggedIn?<Route path="/courses" element={<Course/>}/>:<Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
}
      
    </Routes>
  );
};

export default AppRoutes;