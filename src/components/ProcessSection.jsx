import React from "react";
import BolsitaImage from "../assets/Bolsita.png";
import MisPedidos from "../assets/Mis Pedidos.jpg";

// Sección que explica el proceso de pedido en 4 pasos
const ProcessSection = () => {
  return (
    <div className="relative py-10 px-4 mt-4 mb-4 bg-white">
      <div id="como-funciona" className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Columna izquierda: pasos del proceso */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              El proceso en 4 etapas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#F08000] text-white font-bold text-xl mt-1">
                  01
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  El cliente explora el menú del restaurante, añade sus
                  productos al carrito y confirma el pedido en la aplicación de
                  manera sencilla y rápida.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#F08000] text-white font-bold text-xl mt-1">
                  02
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Para completar la orden, el cliente realiza el Pago Móvil
                  directamente al restaurante y sube el comprobante en el chat
                  integrado de la aplicación.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#F08000] text-white font-bold text-xl mt-1">
                  03
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  El restaurante verifica el comprobante de pago recibido en la
                  aplicación, lo aprueba y comienza de inmediato con la
                  preparación del pedido solicitado.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#F08000] text-white font-bold text-xl mt-1">
                  04
                </div>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  El restaurante gestiona el envío del pedido mediante su
                  delivery y lo entrega al cliente, manteniendo todo registrado
                  dentro de la aplicación.
                </p>
              </div>
            </div>
          </div>

         {/* Columna derecha: mockups de screenshots de iPhone */}
<div className="relative w-full lg:w-1/2 flex flex-col md:flex-row items-center lg:items-start justify-center space-y-4 md:space-y-0 md:space-x-8 pt-20 lg:pt-0">
  {/* Primer mockup: Bolsita de compra */}
  <div className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 aspect-[9/19.5] -mt-1 md:-mt-4 lg:-mt-12 rounded-[1.5rem] overflow-hidden shadow-xl bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
    <img
      src={BolsitaImage}
      alt="Screenshot de iPhone: Bolsita de compra en la app"
      className="w-full h-full max-w-full max-h-full object-contain p-2"
      loading="lazy"
    />
  </div>

  {/* Segundo mockup: Mis Pedidos */}
  <div className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 aspect-[9/19.5] mt-1 md:mt-4 lg:mt-12 rounded-[1.5rem] overflow-hidden shadow-xl bg-gradient-to-b from-white to-gray-100 flex items-center justify-center">
    <img
      src={MisPedidos}
      alt="Screenshot de iPhone: Pantalla de Mis Pedidos en la app"
      className="w-full h-full max-w-full max-h-full object-contain p-2"
      loading="lazy"
    />
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
