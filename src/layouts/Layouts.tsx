export default function Layout({  }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Mi Sitio</h1>
      </header>

      <main className="flex-1 p-4">
        {}
      </main>

      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; 2025 Mi Sitio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
