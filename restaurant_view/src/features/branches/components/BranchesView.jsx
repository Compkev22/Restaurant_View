import { PlusIcon, PencilSquareIcon, TrashIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const BranchesView = () => {
    // Sucursales de prueba
    const mockBranches = [
        { id: 1, name: "KFC Zona 10", address: "Av. Reforma 10-23, Zona 10", manager: "Roberto Gómez", status: "Activa" },
        { id: 2, name: "KFC Majadas", address: "Parque Majadas, Zona 11", manager: "Ana López", status: "Activa" },
        { id: 3, name: "KFC Cayalá", address: "Paseo Cayalá, Zona 16", manager: "Sin asignar", status: "Inactiva" },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Gestión de Sucursales</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Administra las ubicaciones y su operatividad</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95">
                    <PlusIcon className="w-5 h-5" />
                    Nueva Sucursal
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">Sucursal y Dirección</th>
                                <th className="px-6 py-4">Gerente (Branch Admin)</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockBranches.map((branch) => (
                                <tr key={branch.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900 flex items-center gap-2">
                                            <MapPinIcon className="w-4 h-4 text-[#a16207]" />
                                            {branch.name}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">{branch.address}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">
                                        {branch.manager}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            branch.status === 'Activa' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {branch.status}
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