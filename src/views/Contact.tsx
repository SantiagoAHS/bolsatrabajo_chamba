import Layout from "../layouts/Layouts";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
    {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
            </p>

            <div>
              

              <p className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <p className="text-gray-600">+52 (241) 176-4468</p>
                </div>


                <p className="h-5 w-5 text-blue-600 mt-1" />
                <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contacto@gmail.com</p>
                </div>

                <p className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Horario de atención</p>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 AM - 6:00 PM
                      <br />
                      Sábado: 10:00 AM - 4:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>

            </div>

          </div>
        </div>
      </div>

      

    </div>
  );
}
