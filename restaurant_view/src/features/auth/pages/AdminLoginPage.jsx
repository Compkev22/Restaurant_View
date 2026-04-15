
import { useState } from "react";
import { AdminLoginForm } from "../components/AdminLoginForm";
import { AdminForgotForm } from "../components/AdminForgotForm";
import imgLogo from "../../../assets/img/KinalFriedChickenLogo.png";

export const AdminLoginPage = () => {
    // Mantenemos la lógica de estado del profe (isForgot)
    const [isForgot, setIsForgot] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#7f1d1d] p-4">
            <div className="bg-[#fffaf2] w-full max-w-[400px] rounded-2xl shadow-2xl p-8 border border-orange-100">
                
                <div className="flex justify-center mb-6">
                    <img
                        src={imgLogo}
                        alt="Logo KFC"
                        className="h-24 w-auto drop-shadow-lg"
                    />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-black text-gray-950">Kinal Fried Chicken</h1>
                    <p className="text-xs font-bold text-[#dc2626] uppercase tracking-[0.2em] mt-2">
                        {isForgot ? "Recuperación de Acceso" : "Portal de Administración"}
                    </p>
                </div>

                {/* Alternancia de formularios como la del profe */}
                {isForgot ? (
                    <AdminForgotForm onSwitch={() => setIsForgot(false)} />
                ) : (
                    <AdminLoginForm onForgot={() => setIsForgot(true)} />
                )}
            </div>
        </div>
    );
};