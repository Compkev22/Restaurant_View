import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
    // Estas rutas deben coincidir con las que pusimos en el AppRoutes
    const items = [
        { label: "Dashboard", path: "/dashboard", exact: true },
        { label: "Menú y Combos", path: "menu" },
        { label: "Sucursales", path: "branches" },
        { label: "Mesas", path: "tables" },
        { label: "Usuarios", path: "users" },
        { label: "Cupones", path: "coupons" },
    ];

    return (
        <aside className="w-60 bg-white min-h-[calc(100vh-4rem)] p-4 shadow-sm border-r border-gray-100 flex flex-col">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
                Administración
            </p>
            <ul className="space-y-1 flex-1">
                {items.map((item) => (
                    <li key={item.label}>
                        <NavLink
                            to={item.path}
                            end={item.exact}
                            className={({ isActive }) =>
                                `block px-4 py-2 rounded-lg font-medium transition-colors ${
                                    isActive
                                        ? "bg-red-50 text-[#dc2626]" // Estilo activo estilo KFC
                                        : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};