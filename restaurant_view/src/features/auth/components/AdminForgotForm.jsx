export const AdminForgotForm = ({ onSwitch }) => {
    return (
        <form className="space-y-5 animate-fadeIn">
            <div>
                <label className="block text-xs font-bold text-[#a16207] uppercase mb-1.5 tracking-wide">
                    Correo Electrónico de Recuperación
                </label>
                <input
                    type="email"
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all shadow-sm"
                    placeholder="admin@kinalfc.com"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm shadow-[0_8px_15px_-3px_rgba(249,115,22,0.3)] transition-all active:scale-[0.98]"
            >
                Enviar Instrucciones
            </button>

            <div className="text-center pt-2">
                <button
                    type="button"
                    onClick={onSwitch}
                    className="text-xs text-orange-900 font-bold hover:underline"
                >
                    Regresar al Inicio de Sesión
                </button>
            </div>
        </form>
    );
};