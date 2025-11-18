import React from "react";
// 1. Importar los íconos necesarios para los pasos
import { FiSearch, FiCreditCard, FiCheckCircle, FiTruck } from 'react-icons/fi';
import BolsitaImage from "../assets/Bolsita.png";
import MisPedidos from "../assets/Mis Pedidos.jpg";

// Componente para el ítem de paso del proceso
const ProcessStep = ({ IconComponent, stepNumber, title, description }) => {
  const BRAND_COLOR = "text-[#F08000]";
  const BG_COLOR = "bg-[#F08000]";

  return (
    <div className="flex items-start space-x-4 group">
      {/* Indicador de Número e Ícono */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full ${BG_COLOR} text-white font-bold text-xl transition duration-300 group-hover:scale-105 shadow-md`}>
          {/* Se usa el Ícono descriptivo */}
          <IconComponent className="text-2xl" />
        </div>
        {/* Línea divisoria (Solo para los pasos intermedios, simula una línea de tiempo) */}
        {stepNumber < 4 && (
          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
        )}
      </div>
      
      {/* Contenido del paso */}
      <div className="pb-10 pt-1">
        <h3 className={`text-xl font-bold ${BRAND_COLOR} mb-2`}>
          Paso 0{stepNumber}: {title}
        </h3>
        <p className="text-gray-700 leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  );
};


// Sección que explica el proceso de pedido en 4 pasos
const ProcessSection = () => {
  return (
    <div id="como-funciona" className="relative py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
            Así funciona <b>Riko</b>
          </h2>
          <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
            El proceso es simple, rápido y te da control total desde el pedido hasta la entrega.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          
          {/* Columna izquierda: Línea de tiempo de pasos */}
          <div className="w-full lg:w-1/2">
            <div className="relative pl-2">
              
              <ProcessStep
                IconComponent={FiSearch}
                stepNumber={1}
                title="Explora y Ordena"
                description="El cliente explora el menú, añade sus productos al carrito y confirma el pedido en la aplicación de manera sencilla y rápida."
              />
              <ProcessStep
                IconComponent={FiCreditCard}
                stepNumber={2}
                title="Pago Móvil y Chat"
                description="Para completar la orden, el cliente realiza el Pago Móvil directamente al restaurante y sube el comprobante en el chat integrado de la aplicación."
              />
              <ProcessStep
                IconComponent={FiCheckCircle}
                stepNumber={3}
                title="Verificación y Preparación"
                description="El restaurante verifica el comprobante de pago recibido en la aplicación, lo aprueba y comienza de inmediato con la preparación del pedido solicitado."
              />
              <ProcessStep
                IconComponent={FiTruck}
                stepNumber={4}
                title="Gestión de Entrega"
                description="El restaurante gestiona el envío del pedido mediante su delivery y lo entrega al cliente, manteniendo todo registrado y trazable dentro de la aplicación."
              />
            </div>
          </div>

          {/* Columna derecha: Mockups de screenshots */}
          <div className="relative w-full lg:w-1/2 flex justify-center h-[550px]">
            
            {/* Mockup Trasero (Bolsita) */}
            <div className="absolute w-64 h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transform rotate-3 -translate-x-1/4 transition-all duration-500 hover:scale-[1.03] z-10">
              <img
                src={BolsitaImage}
                alt="Screenshot de iPhone: Bolsita de compra en la app"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Mockup Frontal (Mis Pedidos) */}
            <div className="absolute w-64 h-[500px] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transform -rotate-6 translate-x-1/4 transition-all duration-500 hover:scale-[1.03] z-20">
              <img
                src={MisPedidos}
                alt="Screenshot de iPhone: Pantalla de Mis Pedidos en la app"
                className="w-full h-full object-cover"
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