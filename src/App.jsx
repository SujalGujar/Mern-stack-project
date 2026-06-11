import React from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
