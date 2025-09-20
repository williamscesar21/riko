import React from "react";
import Chat from "../assets/chat.png";

// Sección de servicios de la app
const AppServiceSection = () => {
  return (
    <div className="relative overflow-hidden py-16 px-4 bg-white">
      <div className="container mx-auto px-4">
        {/* Layout principal: imagen + contenido */}
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center justify-center lg:space-x-20">
          {/* Imagen del teléfono */}
          <div className="w-48 md:w-64 lg:w-72 rounded-[2rem] overflow-hidden shadow-2xl mb-12 lg:mb-0">
            <div className="shadow-2xl overflow-hidden">
              <img
                src={Chat}
                alt="App Chat Interface"
                className="w-full h-[550px] md:h-[650px] object-cover"
              />
            </div>
          </div>

          {/* Texto y bloques de funciones */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block pb-2 text-center lg:text-left">
              <span>
                App
                <div className="bg-[#F08000] h-1 rounded-full mt-4"></div>
              </span>{" "}
              Service
            </h2>

            {/* Bloques funcionales */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-12">
              {/* Bloque: Gestión de pedidos */}
              <div className="w-full md:w-1/2 p-8 bg-gray-100 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F08000] text-white">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-800">
                    Gestión completa de pedidos
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  La aplicación permite al restaurante centralizar todos los
                  pedidos en un solo lugar. Desde la confirmación del pago hasta
                  la preparación y entrega, todo el proceso se gestiona de forma
                  digital.
                </p>
              </div>

              {/* Bloque: Chat con el cliente */}
              <div className="w-full md:w-1/2 p-8 bg-[#F08000] text-white rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-[#FF5733]">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="ml-4 text-xl font-semibold">
                    Charlar directa con el cliente
                  </h3>
                </div>
                <p className="leading-relaxed text-sm lg:text-base">
                  El sistema de chat integrado conecta al restaurante con el
                  cliente en tiempo real. Allí se sube el comprobante de pago,
                  se confirma la recepción y se pueden aclarar dudas o enviar
                  actualizaciones sobre el pedido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppServiceSection;
