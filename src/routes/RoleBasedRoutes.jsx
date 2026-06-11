import {useAuth} from "../Context/AuthContext"
import {Navigate} from "react-router-dom"

export const RoleBasedRoutes =({allowedRoles,children})=>{
    const {user} = useAuth();

    if(!user){
        return <Navigate to="/login" replace/>
    }


    if(!allowedRoles.includes(user.role)){
        return <Navigate to='/unauthorized' replace/>
    }

    return children;
} 