import { useContext,createContext,useState, Children } from "react";

const AuthContext = createContext();

export const AuthProvider = ({Children})=>{
  const[token,setToken] = useState(localStorage.getItem('token'))

  const[user,setUser] = useState(() =>{
    const storedUser = localStorage.getItem('user');
    return storedUser?JSON.parse(storedUser):null
  })

   const login = (token,user) =>{
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user))

    setToken(token)
    setUser(user)
}

const logout = (token,user) =>{
    localStorage.removeItem("token",token)
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
}

return (
    <AuthContext.Provider value={token,user,login,logout}>
        {Children}
    </AuthContext.Provider>
)
}




export const useAuth = () =>userContext(AuthContext)