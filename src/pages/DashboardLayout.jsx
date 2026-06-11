import { SidebarRole } from "./RoleSidebar/SidebarRole";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <SidebarRole />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
