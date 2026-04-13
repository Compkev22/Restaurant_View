import { useState } from "react";
import { AdminLoginForm } from "../components/AdminLoginForm";
import { AdminForgotForm } from "../components/AdminForgotForm";

export const AdminLoginPage = () => {
    const [isForgot, setIsForgot] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#7f1d1d] p-4 transition-all duration-300">
            <div className="bg-[#fffaf2] w-full max-w-[380px] rounded-2xl shadow-[0_15px_50px_-15px_rgba(249,115,22,0.5)] p-8 border border-orange-100">
                
                {/* Logo sin el contenedor circular */}
                <div className="flex justify-center mb-6">
                    <img
                        src="\src\assets\img\KinalFriedChickenLogo.png"
                        alt="Logo KFC"
                        className="w-28 h-auto object-contain drop-shadow-md"
                    />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-xl font-extrabold text-gray-950">Kinal Fried Chicken</h1>
                    <p className="text-[10px] font-bold text-[#dc2626] uppercase tracking-wider mt-1">
                        {isForgot ? "Recuperación de Acceso" : "Portal de Administración"}
                    </p>
                </div>

                {isForgot ? (
                    <AdminForgotForm onSwitch={() => setIsForgot(false)} />
                ) : (
                    <AdminLoginForm onForgot={() => setIsForgot(true)} />
                )}
            </div>
        </div>
    );
};