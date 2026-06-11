import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import { Course } from "../pages/courses/Course";
import { useState } from "react";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { RoleBasedRoutes } from "./RoleBasedRoutes";
const AppRoutes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>}/>

      <Route
      path="/student/dashboard"
      element={
        <ProtectedRoutes>
          <RoleBasedRoutes allowedRoles={["student"]}>
      //student dashboard components

          </RoleBasedRoutes>
        </ProtectedRoutes>
      }
      />

      <Route
      path="/instructor/dashboard"
      element={
        <ProtectedRoutes>
          <RoleBasedRoutes allowedRoles={["instructor"]}>
            //instructor dashboard components
 
          </RoleBasedRoutes>
        </ProtectedRoutes>
      }
      />

      
    </Routes>
  );
};

export default AppRoutes;