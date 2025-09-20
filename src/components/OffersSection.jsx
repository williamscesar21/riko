import React from "react";
import Inicio from "../assets/Inicio.png";
import Home from "../assets/Home.png";

// Sección de ofertas promocionales
const OffersSection = () => {
  return (
    <div className="relative py-20 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Columna izquierda: texto de ofertas */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              ¡OFERTAS!
            </h2>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  OFERTA 1
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Durante el primer mes los restaurantes podrán usar la
                  aplicación sin ningún costo. Esto les permite probar todas las
                  funciones de gestión de pedidos, chat con clientes y
                  administración de pagos móviles, sin ningún compromiso
                  económico.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  OFERTA 2
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Los restaurantes que deseen destacar en los banners
                  publicitarios digitales dentro de la aplicación solo deberán
                  pagar el primer mes. Con esta opción obtendrán visibilidad
                  preferente frente a los clientes, lo que aumenta las
                  posibilidades de recibir más pedidos y mejorar el alcance de
                  su marca en la ciudad.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: mockups de pantallas móviles */}
          <div className="relative w-full lg:w-1/2 flex flex-row items-start justify-center space-x-4">
            <div className="w-48 md:w-64 lg:w-72 -mt-12 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="shadow-2xl overflow-hidden">
                <div className="w-full h-[550px] md:h-[650px] bg-white flex items-center justify-center text-gray-700 text-xs text-center">
                  <img src={Inicio} alt="Pantalla de Inicio de Sesión" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="w-48 md:w-64 lg:w-72 mt-12 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="shadow-2xl overflow-hidden">
                <div className="w-full h-[550px] md:h-[650px] bg-white flex items-center justify-center text-gray-700 text-xs text-center">
                  <img src={Home} alt="Pantalla de Inicio" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
