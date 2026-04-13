export const AdminNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="\src\assets\img\KinalFriedChickenLogo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-black text-gray-900 tracking-tight">KFC ADMIN</span>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-gray-500">Kevin Velásquez</span>
            <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-xs shadow-md">KV</div>
        </div>
      </div>
    </nav>
  );
};