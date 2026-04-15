import imgLogo from "../../../assets/img/KinalFriedChickenLogo.png";

export const AdminNavbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                
                {/* Logo + Título (Estilo Profe con imagen de Kevin) */}
                <div className="flex items-center gap-3">
                    <img
                        src={imgLogo}
                        alt="KFC Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <h1 className="font-black text-gray-900 text-lg tracking-tight">
                        KFC ADMIN
                    </h1>
                </div>

                {/* Info de Usuario (Estilo Kevin) */}
                <div className="flex items-center gap-4">
                    <span className="hidden md:block text-xs font-bold text-gray-500 uppercase tracking-wider">
                        Kevin Velásquez
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white font-bold shadow-md border-2 border-white">
                        KV
                    </div>
                </div>
            </div>
        </nav>
    );
};