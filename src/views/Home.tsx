import { useEffect, useState } from "react";

const images = [
  "/img/CarruselCh.jpg",
  "/img/CarruselCh2.jpg",
  "/img/CarruselCh3.jpg",
];

const reviews = [
  {
    servicio: "Plomero",
    estrellas: 5,
    comentario: "Excelente trabajo, rápido y limpio.",
    imagen: "/img/plomero.jpg",
  },
  {
    servicio: "Albañil",
    estrellas: 4,
    comentario: "Buen trabajo, aunque llegó tarde.",
    imagen: "/img/albanil.jpg",
  },
  {
    servicio: "Electricista",
    estrellas: 5,
    comentario: "¡Muy profesional y amable!",
    imagen: "/img/electricista.jpg",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  // Rotar imagen cada 3 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">
      
    <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-4 animate-fade-in">
            Encuentra tu Servicio Ideal
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
            Conecta con los mejores trabajadores de tu zona y encuentra el servicio que necesitas.
        </p>
    </section>

      {/* Carrusel de imágenes */}
      <section className="mb-10">
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-3xl shadow-2xl h-[500px]">
            <img
            src={images[index]}
            alt={`Imagen ${index + 1}`}
            className="w-full h-full object-cover transition-all duration-1000"
            />
        </div>
    </section>


      {/* Tarjetas de valoraciones */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={review.imagen}
                alt={review.servicio}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-orange-600">{review.servicio}</h3>
                <div className="text-yellow-500">
                  {"⭐".repeat(review.estrellas)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">“{review.comentario}”</p>
          </div>
        ))}
      </section>

        {/* Categorias Populares */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-6"> Categorías Populares</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {["Plomería", "Electricidad", "Construcción", "Jardinería", "Limpieza"].map((cat) => (
            <div key={cat} className="bg-white p-6 rounded-xl shadow-md w-40 hover:shadow-xl transition-all">
                <div className="text-4xl mb-2">🛠️</div>
                <p className="text-lg font-semibold text-gray-700">{cat}</p>
            </div>
            ))}
        </div>
        <p className="text-gray-600 mt-4 font-bold">¡Explora nuestros servicios y encuentra el que mejor se adapte a tus necesidades!</p>
      </section>

        {/* Sección de contacto urgente */}
      <section className="bg-gradient-to-r from-red-500 to-yellow-600 text-white text-center py-10 rounded-3xl mt-16">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio urgente?</h2>
            <p className="text-lg mb-6">Contáctanos y encuentra al mejor trabajador cerca de ti.</p>
                <button className="bg-white text-orange-700 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition-all">
                    Buscar ahora
                </button>
            <p className="text-white mt-4">¡No esperes más, contáctanos ahora!</p>
      </section>

    </main>
  );
}
