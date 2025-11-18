import React from "react";
// 1. Importar los íconos necesarios de React Icons
import { FiClipboard, FiMessageCircle } from 'react-icons/fi'; 
import Chat from "../assets/Chat.png";

// Componente para el Bloque de Característica
const FeatureBlock = ({ IconComponent, title, description, isPrimary }) => {
  const BRAND_COLOR = "text-[#F08000]";
  const BG_COLOR = "bg-[#F08000]";
  const WHITE = "text-white";
  
  // Clases condicionales para el contraste
  const cardClasses = isPrimary
    ? `${BG_COLOR} text-white shadow-xl hover:shadow-2xl`
    : 'bg-white text-gray-800 shadow-xl border border-gray-100 hover:shadow-2xl';
  
  const iconBg = isPrimary ? 'bg-white' : `${BG_COLOR} bg-opacity-10`;
  const iconColor = isPrimary ? BRAND_COLOR : WHITE;
  const descriptionColor = isPrimary ? 'text-white' : 'text-gray-600';

  return (
    <div className={`w-full p-8 rounded-2xl transition duration-300 transform hover:-translate-y-1 ${cardClasses}`}>
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full ${iconBg}`}>
          {/* Usamos el componente de React Icon */}
          <IconComponent className={`text-2xl ${iconColor}`} />
        </div>
        <h3 className={`ml-4 text-xl font-bold ${isPrimary ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h3>
      </div>
      <p className={`leading-relaxed text-base ${descriptionColor}`}>
        {description}
      </p>
    </div>
  );
};


// Sección de servicios de la app
const AppServiceSection = () => {
  const BRAND_COLOR = "text-[#F08000]";
  const BG_COLOR = "bg-[#F08000]";

  return (
    <div id="Servicios" className="relative overflow-hidden py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* === Título Central === */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
            Servicios Clave de la <span className={BRAND_COLOR}>App</span>
          </h2>
          <div className={`h-1 w-24 ${BG_COLOR} mx-auto rounded-full mt-4`}></div>
        </div>

        {/* Layout principal: imagen + contenido */}
        <div className="flex flex-col-reverse items-center lg:flex-row lg:items-center justify-center lg:space-x-20">
          
          {/* Columna: Texto y bloques de funciones */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mb-16 lg:mb-0 lg:pr-12">

            <p className="text-xl text-gray-600 mb-12 text-center lg:text-left">
              Diseñada para la eficiencia, nuestra aplicación te brinda el control total que necesitas para gestionar pedidos y comunicarte con tus clientes sin intermediarios.
            </p>

            {/* Bloques funcionales (Mejorados con FeatureBlock) */}
            <div className="flex flex-col space-y-8 w-full">
              
              {/* Bloque 1: Gestión de pedidos (Secundario/Blanco) */}
              <FeatureBlock
                IconComponent={FiClipboard}
                title="Gestión Completa de Pedidos"
                description="La aplicación permite al restaurante centralizar todos los pedidos. Desde la confirmación del pago hasta la preparación y entrega, todo el proceso se gestiona de forma digital y organizada."
                isPrimary={false} 
              />

              {/* Bloque 2: Chat con el cliente (Primario/Naranja) */}
              <FeatureBlock
                IconComponent={FiMessageCircle}
                title="Chat Directo con el Cliente"
                description="El sistema de chat integrado facilita la comunicación en tiempo real. Allí se sube el comprobante de pago, se confirma la recepción y se pueden aclarar dudas o enviar actualizaciones."
                isPrimary={true} 
              />
              
            </div>
          </div>
          
          {/* Columna: Imagen del teléfono (Mockup mejorado) */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 mb-16 lg:mb-0 h-[500px] items-center">
            <div className="relative w-64 md:w-80 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transform rotate-3 ring-4 ring-gray-100 transition-transform duration-500 hover:rotate-0">
              <img
                src={Chat}
                alt="App Chat Interface Screenshot"
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

export default AppServiceSection;