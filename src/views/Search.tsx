import { useLocation } from 'react-router-dom';

export default function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q');

  return (
    <div className="text-center mt-10 px-4">
      <h2 className="text-2xl font-bold mb-4">🔎 Resultados de búsqueda</h2>
      <p className="text-lg">
        Buscaste: <span className="font-semibold text-orange-600">{query}</span>
      </p>

      {/* Mensaje de prototipo */}
      <div className="mt-6 text-gray-600 italic">
        Aún no hay resultados reales. Prototipo en construcción 🚧
      </div>

      {/* Categorías Populares */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6">Categorías Populares</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["Plomería", "Electricidad", "Construcción", "Jardinería", "Limpieza"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl shadow-md w-40 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-2">🛠️</div>
              <p className="text-lg font-semibold text-gray-700">{cat}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4 font-bold">
          ¡Explora nuestros servicios y encuentra el que mejor se adapte a tus necesidades!
        </p>
      </section>
    </div>
  );
}
