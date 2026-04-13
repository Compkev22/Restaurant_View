import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import { AdminSidebar } from "./AdminSidebar";

export const AdminDashboardContainer = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <AdminNavbar />
            <div className="flex flex-1">
                <AdminSidebar />
                
                {/* El contenido central que cambia */}
                <main className="flex-1 p-8 bg-gray-50/50 overflow-y-auto">
                    <div className="bg-white rounded-3xl h-full shadow-sm border border-gray-100 p-6">
                        
                        {/* OUTLET: Aquí se renderizarán los usuarios, sucursales, etc. */}
                        <Outlet />

                    </div>
                </main>
            </div>
        </div>
    );
};