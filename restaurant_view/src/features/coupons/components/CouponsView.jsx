import { PlusIcon, PencilSquareIcon, TrashIcon, TicketIcon } from "@heroicons/react/24/outline";

export const CouponsView = () => {
    // Cupones de prueba
    const mockCoupons = [
        { id: 1, code: "KINAL20", discount: "20%", expiry: "31/12/2026", uses: "145 / 500", status: "Activo" },
        { id: 2, code: "VERANOFC", discount: "Q. 25.00", expiry: "30/04/2026", uses: "42 / 100", status: "Activo" },
        { id: 3, code: "ENVIOFREE", discount: "Envío Gratis", expiry: "01/01/2026", uses: "500 / 500", status: "Agotado" },
    ];

    return (
        <div className="animate-fadeIn">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-black text-gray-900">Gestión de Cupones</h1>
                    <p className="text-sm font-medium text-gray-500 mt-1">Control de promociones exclusivas</p>
                </div>
                <button className="flex items-center gap-2 bg-[#e11d48] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all active:scale-95">
                    <PlusIcon className="w-5 h-5" />
                    Nuevo Cupón
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                <th className="px-6 py-4">Código</th>
                                <th className="px-6 py-4">Descuento</th>
                                <th className="px-6 py-4 text-center">Usos</th>
                                <th className="px-6 py-4">Vencimiento</th>
                                <th className="px-6 py-4">Estado</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockCoupons.map((coupon) => (
                                <tr key={coupon.id} className="hover:bg-orange-50/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <TicketIcon className="w-5 h-5 text-[#a16207]" />
                                            <span className="font-mono font-bold text-lg text-gray-900 tracking-widest bg-gray-100 px-2 py-1 rounded border border-dashed border-gray-300">
                                                {coupon.code}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-black text-[#e11d48]">
                                        {coupon.discount}
                                    </td>
                                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-600">
                                        {coupon.uses}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">
                                        {coupon.expiry}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            coupon.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {coupon.status}
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