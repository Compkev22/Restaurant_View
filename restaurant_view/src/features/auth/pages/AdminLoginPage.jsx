import { AdminLoginForm } from "../components/AdminLoginForm";

export const AdminLoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#7f1d1d] p-4 transition-all duration-300">
            
            <div className="bg-[#fffaf2] w-full max-w-[380px] rounded-2xl shadow-[0_15px_50px_-15px_rgba(249,115,22,0.5)] p-8 border border-orange-100 animate-fadeIn">
                
                <div className="flex justify-center mb-5">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-[#facc15] shadow-inner overflow-hidden">
                        {/* Asegúrate de cambiar el nombre por el del nuevo logo que vayan a usar */}
                        <img
                            src="/src/assets/img/nuevo_logo.png"
                            alt="Logo KFC Admin"
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                </div>

                <div className="text-center mb-9">
                    <h1 className="text-xl font-extrabold text-gray-950 leading-tight">
                        Kinal Fried Chicken
                    </h1>
                    <p className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider mt-1.5">
                        Portal de Administración
                    </p>
                </div>

                <AdminLoginForm />

                <div className="mt-8 text-center pt-5 border-t border-orange-100">
                    <p className="text-xs text-orange-900 font-medium hover:text-orange-700 cursor-pointer transition-colors">
                        Contactar a Soporte Técnico
                    </p>
                </div>
            </div>
        </div>
    );
};