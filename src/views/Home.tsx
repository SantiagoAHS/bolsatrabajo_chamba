import Layout from "../layouts/Layouts";

export default function Home() {
  return (
    <>
      <main className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">
        <section className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-indigo-700 mb-4 animate-fade-in">
            ✨ Bienvenido ✨
          </h2>

          <span className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md mb-4">
            ¡Gracias por visitar nuestro sitio!
          </span>

          <p className="text-lg max-w-xl mx-auto">
            Esta es la página de inicio donde podrás encontrar chambas, diversión y advertencias importantes para mantener la paz. 👀
          </p>
        </section>

        <section className="text-center mb-10">
          <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-400 text-white font-bold px-6 py-2 rounded-lg shadow-lg animate-pulse">
            ⚠️ Piti deja de molestar a Yaneth o te cae una orden de alejamiento ⚠️
          </div>
        </section>

        <section className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">👷‍♂️ Chambas disponibles 👷‍♂️</h3>

          <ul className="space-y-3 text-left text-lg">
            <li className="flex items-center gap-2">
              🆓 <span>Trabajos gratis</span>
            </li>
            <li className="flex items-center gap-2">
              🧱 <span>Albañil</span>
            </li>
            <li className="flex items-center gap-2">
              🚿 <span>Plomero</span>
            </li>
            <li className="flex items-center gap-2">
              💧 <span>Aguador Profesional</span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
