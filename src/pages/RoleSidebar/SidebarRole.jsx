import {Link} from "react-router-dom";
import { useAuth } from "../../Context/AuthContext"; 

 const SidebarConfig = {
    admin:[
        {label:"Dashboard" ,path:"/admin/dashboard"}
    ],
    student:[
        {lable:"Dashboard",path:"/student/dashboard"}
    ],
    instructor:[
        {label:"Dashboard",path:"/instructor/dashboard"}
    ]
}

export const SidebarRole = () =>{
  const {user} = useAuth();

  const menuItems = SidebarConfig[user?.role] || []

  return (
    <aside>
        {menuItems.map((item) =>{
            <link key={item.path} to={item.path}>
                {item.lable}
            </link>
        })}
    </aside>
 )
}