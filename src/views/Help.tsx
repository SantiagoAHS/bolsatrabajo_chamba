import { ClipboardCheck, Megaphone, Mail } from "lucide-react";

export default function Help() {
  return (
    <main className="p-6 min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-800">
      {/* Encabezado */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Ayuda</h1>

        <span className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-md mb-4">
          ¡Gracias por visitar nuestro sitio!
        </span>

        <p className="text-lg max-w-xl mx-auto text-gray-700">
          Esta es la página de ayuda donde podrás encontrar las dudas más comunes que hemos recopilado para ti. Si necesitas más información, contáctanos a través del formulario.
        </p>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="my-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">❓ Preguntas Frecuentes</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-semibold text-xl text-indigo-700 mb-2 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6" /> ¿Cómo contrato un servicio?
            </h4>
            <p className="text-gray-600">
              Solo elige el que necesitas y llena el formulario de contacto. Nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-semibold text-xl text-indigo-700 mb-2 flex items-center gap-2">
              <Megaphone className="w-6 h-6" /> ¿Es gratis publicar trabajos?
            </h4>
            <p className="text-gray-600">
              ¡Sí! Publicar trabajos en nuestra plataforma es totalmente gratuito. Solo necesitas crear una cuenta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h4 className="font-semibold text-xl text-indigo-700 mb-2 flex items-center gap-2">
              <Mail className="w-6 h-6" /> ¿Cómo me comunico con el equipo?
            </h4>
            <p className="text-gray-600">
              Puedes usar nuestro formulario de contacto o escribirnos directamente al correo soporte@mchambas.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
