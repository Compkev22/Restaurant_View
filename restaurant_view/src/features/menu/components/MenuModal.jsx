import { XMarkIcon } from "@heroicons/react/24/outline";

export const MenuModal = ({ isOpen, onClose, type = "Producto" }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#fffaf2] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-orange-100">
                {/* Header Estilo Kevin */}
                <div className="bg-[#e11d48] p-6 flex justify-between items-center text-white">
                    <div>
                        <h2 className="text-xl font-black uppercase tracking-tight">Nuevo {type}</h2>
                        <p className="text-xs font-bold text-red-100 opacity-80">Completa los datos del menú</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-all">
                        <XMarkIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* Formulario Estilo Profe pero con colores de Kevin */}
                <form className="p-8 space-y-5">
                    <div>
                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Nombre del Artículo</label>
                        <input type="text" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="Ej: Super Combo Familiar" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Precio (Q)</label>
                            <input type="number" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all" placeholder="0.00" />
                        </div>
                        <div>
                            <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Estado</label>
                            <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 outline-none transition-all">
                                <option>Activo</option>
                                <option>Inactivo</option>
                            </select>
                        </div>
                    </div>

                    <button type="button" className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-lg shadow-red-200 transition-all active:scale-[0.98] mt-4 uppercase tracking-widest text-xs">
                        Guardar en Menú
                    </button>
                </form>
            </div>
        </div>
    );
};