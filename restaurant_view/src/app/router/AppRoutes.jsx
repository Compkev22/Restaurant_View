import { Routes, Route, Navigate } from "react-router-dom";
import { AdminLoginPage } from "../../features/auth/pages/AdminLoginPage";
import { AdminDashboardPage } from "../layouts/AdminDashboardPage";

// PRUEBA ESTO: Importando desde la carpeta 'components' que se ve en tu explorador
import { MenuView } from "../../features/menu/components/MenuView"; 
import { BranchesView } from "../../features/branches/components/BranchesView";
import { CouponsView } from "../../features/coupons/components/CouponsView";
import { DashboardOverview } from "../../features/dashboard/pages/DashboardOverview";
import { TablesView } from "../../features/tables/components/TablesView";
import { UsersView } from "../../features/users/components/UsersView";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminLoginPage />} />
            <Route path="/dashboard" element={<AdminDashboardPage />}>
                <Route index element={<DashboardOverview />} /> 
                <Route path="menu" element={<MenuView />} />
                <Route path="branches" element={<BranchesView />} />
                <Route path="tables" element={<TablesView />} />
                <Route path="users" element={<UsersView />} />
                <Route path="coupons" element={<CouponsView />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};