import { PlusIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export const UsersView = () => {
    // Usuarios de prueba
    const mockUsers = [
        { id: 1, name: "Roberto Gómez", email: "roberto@kinalfc.com", role: "BRANCH_ADMIN", branch: "Zona 10", status: "Activo" },
        { id: 2, name: "Bradley Pérez", email: "bradley@kinalfc.com", role: "EMPLOYEE", branch: "Zona 1", status: "Activo" },
        { id: 3, name: "Ana López", email: "ana@kinalfc.com", role: "EMPLOYEE", branch: "Zona 10", status: "Inactivo" },
    ];

    return (
        <div className="animate-fadeIn">
            {/* Encabezado y Botón Principal */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Gestión de Usuarios</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Administra accesos y roles del personal</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95">
                    <PlusIcon className="w-5 h-5" />
                    Nuevo Usuario
                </button>
            </div>

            {/* Contenedor de la Tabla */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">Nombre y Correo</th>
                                <th className="px-6 py-4">Rol</th>
                                <th className="px-6 py-4">Sucursal</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{user.name}</div>
                                        <div className="text-xs text-gray-500">{user.email}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            user.role === 'BRANCH_ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{user.branch}</td>
                                    <td className="px-6 py-4">
                                        <span className={`flex items-center gap-1.5 text-sm font-bold ${
                                            user.status === 'Activo' ? 'text-green-600' : 'text-red-500'
                                        }`}>
                                            <span className={`w-2 h-2 rounded-full ${user.status === 'Activo' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 flex justify-center gap-3">
                                        <button className="p-2 text-gray-400 hover:text-[#a16207] hover:bg-orange-100 rounded-lg transition-colors">
                                            <PencilSquareIcon className="w-5 h-5" />
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <TrashIcon className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};