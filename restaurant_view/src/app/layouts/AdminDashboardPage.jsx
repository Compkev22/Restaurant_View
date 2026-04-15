import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../shared/components/layout/AdminSidebar";
import { AdminNavbar } from "../../shared/components/layout/AdminNavbar";

export const AdminDashboardPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Tu Sidebar a la izquierda */}
            <AdminSidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Tu Navbar arriba */}
                <AdminNavbar />

                {/* CONTENIDO DINÁMICO: Aquí es donde ocurre la magia */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
};