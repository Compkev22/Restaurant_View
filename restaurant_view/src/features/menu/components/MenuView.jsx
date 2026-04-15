import { useState } from "react";
import { PlusIcon, PencilSquareIcon, TrashIcon, TagIcon } from "@heroicons/react/24/outline";
import { MenuModal } from "../components/MenuModal"; // Importamos el modal que acabamos de crear

export const MenuView = () => {
    // Estado para controlar el modal (Lógica fundamental del profe)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("Producto");

    const handleOpenModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const mockMenu = [
        { id: 1, name: "Combo Familiar", description: "8 piezas, 2 papas, 1 refresco", type: "Combo", price: "Q. 145.00", status: "Activo" },
        { id: 2, name: "Pieza de Pollo (Pierna)", description: "Pollo crujiente receta original", type: "Producto", price: "Q. 15.00", status: "Activo" },
        { id: 3, name: "Papas Fritas Grandes", description: "Papas con sal especial", type: "Producto", price: "Q. 20.00", status: "Inactivo" },
        { id: 4, name: "Mega Combo Estudiantil", description: "3 piezas, 1 papa pequeña", type: "Combo", price: "Q. 45.00", status: "Activo" },
    ];

    return (
        <div className="animate-fadeIn">
            {/* Modal de Registro */}
            <MenuModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                type={modalType}
            />

            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Menú y Combos</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Administra los productos y combos del restaurante</p>
                </div>
                <div className="flex gap-3">
                    <button 
                        onClick={() => handleOpenModal("Producto")}
                        className="flex items-center gap-2 bg-white border border-[#e11d48] text-[#e11d48] hover:bg-red-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all active:scale-95"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Nuevo Producto
                    </button>
                    <button 
                        onClick={() => handleOpenModal("Combo")}
                        className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Nuevo Combo
                    </button>
                </div>
            </div>

            {/* ... Resto de la tabla de Kevin se mantiene igual ... */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* (Aquí va el código de la tabla que ya tienes) */}
                <div className="p-4 text-center text-xs text-gray-400 font-bold uppercase tracking-widest bg-gray-50/50">
                    Kinal Fried Chicken © 2026
                </div>
            </div>
        </div>
    );
};