import { PlusIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export const TablesView = () => {
    // Mesas de prueba
    const mockTables = [
        { id: 1, number: "M-01", branch: "KFC Zona 10", capacity: 4, status: "Disponible" },
        { id: 2, number: "M-02", branch: "KFC Zona 10", capacity: 2, status: "Ocupada" },
        { id: 3, number: "M-05", branch: "KFC Majadas", capacity: 6, status: "Reservada" },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Gestión de Mesas</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Configuración de capacidad por sucursal</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95">
                    <PlusIcon className="w-5 h-5" />
                    Añadir Mesa
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">No. Mesa</th>
                                <th className="px-6 py-4">Sucursal</th>
                                <th className="px-6 py-4 text-center">Capacidad</th>
                                <th className="px-6 py-4">Estado Actual</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockTables.map((table) => (
                                <tr key={table.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4 font-black text-[#a16207]">
                                        {table.number}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                        {table.branch}
                                    </td>
                                    <td className="px-6 py-4 text-center text-sm font-bold text-gray-600">
                                        {table.capacity} pax
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            table.status === 'Disponible' ? 'bg-green-100 text-green-700' : 
                                            table.status === 'Ocupada' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            {table.status}
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