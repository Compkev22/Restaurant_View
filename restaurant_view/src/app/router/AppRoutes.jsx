import { Route, Routes } from "react-router-dom";
import { AdminLoginPage } from "../../features/auth/pages/AdminLoginPage";
import { AdminDashboardPage } from "../layouts/AdminDashboardPage";
import { DashboardOverview } from "../../features/dashboard/pages/DashboardOverview";
import { UsersView } from "../../features/users/pages/UsersView";
import { BranchesView } from "../../features/branches/pages/BranchesView.jsx";
import { TablesView } from "../../features/tables/pages/TablesView.jsx";
import { MenuView } from "../../features/menu/pages/MenuView.jsx";
import { CouponsView } from "../../features/coupons/pages/CouponsView.jsx";
// (Imagina que tienes estos componentes creados como vistas vacías)
// import { UsersView } from "../../features/users/UsersView";
// import { BranchesView } from "../../features/branches/BranchesView";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Login */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Dashboard Padre */}
            <Route path="/admin/dashboard" element={<AdminDashboardPage />}>
                
                {/* Rutas Hijas (Aparecen dentro del <Outlet />) */}
                <Route index element={<DashboardOverview />} />                
                <Route path="menu" element={<MenuView />} />                
                <Route path="branches" element={<BranchesView />} />
                <Route path="tables" element={<TablesView />} />
                <Route path="users" element={<UsersView />} />
                <Route path="coupons" element={<CouponsView />} />                
            </Route>
        </Routes>
    );
};