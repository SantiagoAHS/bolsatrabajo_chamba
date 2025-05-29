export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Acerca de MChambas</h1>

      <p className="text-gray-700 text-lg mb-10 text-center max-w-3xl mx-auto">
        Fundada en 2022, <span className="font-semibold text-orange-600">MChambas</span> nació con la misión de conectar talentos locales con oportunidades reales de trabajo, impulsando el desarrollo económico y social a través de una plataforma accesible, confiable e inclusiva.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Misión */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nuestra Misión</h2>
          <p className="text-gray-600">
            Empoderar a las personas facilitando el acceso a oportunidades laborales dignas,
            promoviendo la inclusión, la equidad y el crecimiento profesional en comunidades vulnerables y emergentes.
          </p>
        </div>

        {/* Visión */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nuestra Visión</h2>
          <p className="text-gray-600">
            Ser la plataforma líder en Latinoamérica en la vinculación laboral informal y temporal,
            reconocida por su impacto social y por transformar vidas a través del trabajo.
          </p>
        </div>

        {/* Valores */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nuestros Valores</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Compromiso social</li>
            <li>Transparencia</li>
            <li>Accesibilidad</li>
            <li>Innovación</li>
            <li>Respeto a la diversidad</li>
          </ul>
        </div>

        {/* Fundadores */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fundadores</h2>
          <p className="text-gray-600">
            MChambas fue fundada por un equipo multidisciplinario de jóvenes mexicanos apasionados por el impacto social, la tecnología y el emprendimiento.
          </p>
        </div>
      </div>
    </div>
  );
}
