import { PlusIcon, PencilSquareIcon, TrashIcon, TagIcon } from "@heroicons/react/24/outline";

export const MenuView = () => {
    // Productos y combos de prueba
    const mockMenu = [
        { id: 1, name: "Combo Familiar", description: "8 piezas, 2 papas, 1 refresco", type: "Combo", price: "Q. 145.00", status: "Activo" },
        { id: 2, name: "Pieza de Pollo (Pierna)", description: "Pollo crujiente receta original", type: "Producto", price: "Q. 15.00", status: "Activo" },
        { id: 3, name: "Papas Fritas Grandes", description: "Papas con sal especial", type: "Producto", price: "Q. 20.00", status: "Inactivo" },
        { id: 4, name: "Mega Combo Estudiantil", description: "3 piezas, 1 papa pequeña", type: "Combo", price: "Q. 45.00", status: "Activo" },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Menú y Combos</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Administra los productos y combos del restaurante</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white border border-[#e11d48] text-[#e11d48] hover:bg-red-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all active:scale-95">
                        <PlusIcon className="w-5 h-5" />
                        Nuevo Producto
                    </button>
                    <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95">
                        <PlusIcon className="w-5 h-5" />
                        Nuevo Combo
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">Artículo</th>
                                <th className="px-6 py-4">Tipo</th>
                                <th className="px-6 py-4 text-right">Precio</th>
                                <th className="px-6 py-4 text-center">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockMenu.map((item) => (
                                <tr key={item.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-gray-900">{item.name}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`flex w-fit items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                                            item.type === 'Combo' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            <TagIcon className="w-3.5 h-3.5" />
                                            {item.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-black text-[#a16207]">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4 flex justify-center">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            item.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-3">
                                            <button className="p-2 text-gray-400 hover:text-[#a16207] hover:bg-orange-100 rounded-lg transition-colors">
                                                <PencilSquareIcon className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
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