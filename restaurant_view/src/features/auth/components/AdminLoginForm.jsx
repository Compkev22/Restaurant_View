import { useState } from "react";

export const AdminLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Iniciando sesión como admin:", { email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold text-[#a16207] uppercase mb-1.5 tracking-wide">
                    Usuario Administrador
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all shadow-sm placeholder:text-gray-400"
                    placeholder="admin@kinalfc.com"
                />
            </div>
            
            <div>
                <label className="block text-xs font-bold text-[#a16207] uppercase mb-1.5 tracking-wide">
                    Contraseña
                </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all shadow-sm placeholder:text-gray-400"
                    placeholder="........"
                />
            </div>
            
            <button 
                type="submit" 
                className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm shadow-[0_8px_15px_-3px_rgba(249,115,22,0.3)] hover:shadow-[0_12px_20px_-5px_rgba(249,115,22,0.4)] transition-all active:scale-[0.98]"
            >
                Entrar al Sistema
            </button>
        </form>
    );
};