import { 
    CurrencyDollarIcon, 
    ShoppingBagIcon, 
    BuildingStorefrontIcon, 
    UsersIcon 
} from "@heroicons/react/24/outline";

export const DashboardOverview = () => {
    // Datos simulados para el diseño
    const stats = [
        { title: "Ventas de Hoy", value: "Q. 4,520.00", icon: <CurrencyDollarIcon className="w-8 h-8 text-green-600" />, bg: "bg-green-50", border: "border-green-100" },
        { title: "Órdenes Activas", value: "32", icon: <ShoppingBagIcon className="w-8 h-8 text-orange-600" />, bg: "bg-orange-50", border: "border-orange-100" },
        { title: "Sucursales", value: "5", icon: <BuildingStorefrontIcon className="w-8 h-8 text-blue-600" />, bg: "bg-blue-50", border: "border-blue-100" },
        { title: "Empleados Activos", value: "48", icon: <UsersIcon className="w-8 h-8 text-[#e11d48]" />, bg: "bg-red-50", border: "border-red-100" },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="mb-8">
                <h1 className="text-2xl font-black text-gray-900">Resumen del Sistema</h1>
                <p className="text-sm font-medium text-gray-500 mt-1">Métricas en tiempo real de Kinal Fried Chicken</p>
            </div>

            {/* Tarjetas de Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className={`p-6 rounded-2xl border ${stat.border} bg-white shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-1`}>
                        <div className={`p-4 rounded-xl ${stat.bg}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.title}</p>
                            <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Aquí luego pueden agregar gráficos o tablas de últimas órdenes */}
            <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-8 text-center text-gray-400 font-medium shadow-sm">
                Espacio reservado para Gráfica de Ventas Semanales
            </div>
        </div>
    );
};