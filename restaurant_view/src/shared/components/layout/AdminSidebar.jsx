import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
  // Lista de rutas basadas en tu backend
  const menuItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: "📊", exact: true },
    { label: "Menú y Combos", path: "/admin/dashboard/menu", icon: "🍔" },
    { label: "Sucursales", path: "/admin/dashboard/branches", icon: "🏪" },
    { label: "Mesas", path: "/admin/dashboard/tables", icon: "🪑" },
    { label: "Usuarios", path: "/admin/dashboard/users", icon: "👥" },
    { label: "Cupones", path: "/admin/dashboard/coupons", icon: "🎟️" },
  ];

  return (
    <aside className="w-64 bg-[#fffaf2] border-r border-orange-100 min-h-[calc(100vh-4rem)] p-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.exact}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  isActive
                    ? "bg-orange-100 text-[#a16207] shadow-sm border border-orange-200" // Estilo cuando estás en la página
                    : "text-gray-600 hover:bg-orange-50 hover:text-[#a16207]" // Estilo normal
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};