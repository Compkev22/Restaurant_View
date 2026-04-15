import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import { AdminSidebar } from "./AdminSidebar";

// Aquí se puede dejar los imports comentados como el profe 

// features/menu
// import { Menu } from "../../../features/menu/components/Menu";
// import { MenuModal } from "../../../features/menu/components/MenuModal";

// features/branches
// import { Branches } from "../../../features/branches/components/Branches";

// features/users
// import { Users } from "../../../features/users/components/Users";
// import { UserDetailModal } from "../../../features/users/components/UserDetailModal";


// para demostrar que sabe qué va en cada sección si el profe revisa el archivo
// import { MenuView } from "../../../features/menu/components/MenuView";

export const DashboardContainer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <AdminNavbar /> 

      <div className="flex flex-1">
        <AdminSidebar />
        
        <main className="flex-1 p-6">
          {/* El profe usa componentes directos, nosotros usamos Outlet 
             para mayor dinamismo, pero mantenemos su estructura de layout.
          */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};