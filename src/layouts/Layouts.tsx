import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Sitio</h1>
        <nav className="space-x-4">
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/ayuda">Ayuda</Link>
        </nav>
      </header>

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p className='text-orange-700'>&copy; 2025 Mi Sitio. Todos los derechos reservados PITI entretaiment.</p>
      </footer>
    </div>
  );
}
