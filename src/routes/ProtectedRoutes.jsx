import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const ProtectedRoutes = ({children})=>{
   const {token} = useAuth();

   if(!token) {
    return <Navigate to ="/login" replace/>
   }
   return children;


}

