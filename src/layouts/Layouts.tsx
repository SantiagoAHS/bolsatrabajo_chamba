import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Moon } from "lucide-react";
import { useState } from 'react';

export default function Layout() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // para saber la ruta actual

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate(`/buscar?q=${encodeURIComponent(query)}`);
  };

  const linkClass = (path: string) =>
    `hover:underline ${
      location.pathname === path ? 'underline decoration-4 underline-offset-4' : ''
    }`;

  const handleDarkModeClick = () => {
    alert("⚙️ Función en construcción temporal");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-500 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold">MChambas</h1>

        <nav className="space-x-4 font-bold">
          <Link to="/" className={linkClass('/')}>Inicio</Link>
          <Link to="/contacto" className={linkClass('/contacto')}>Contacto</Link>
          <Link to="/acerca" className={linkClass('/acerca')}>Acerca</Link>
          <Link to="/ayuda" className={linkClass('/ayuda')}>Ayuda</Link>
        </nav>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Buscar chambas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-1 text-black focus:outline-none"
            />
            <button type="submit" className="px-3 py-1 text-orange-500 hover:bg-gray-100">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </form>

          <button
            onClick={handleDarkModeClick}
            className="text-gray-600 hover:text-gray-800 transition"
            title="Modo oscuro"
          >
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className="text-orange-700">&copy; 2025 MChambas. Todos los derechos reservados a MChambas.</p>
      </footer>
    </div>
  );
}
