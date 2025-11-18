import React from "react";
// 1. Importar los íconos necesarios de React Icons
import { FiGift, FiStar } from 'react-icons/fi';
import Inicio from "../assets/Inicio.png";
import Home from "../assets/Home.png";

const BRAND_COLOR = "text-[#F08000]";
const BG_COLOR = "bg-[#F08000]";
const WHITE = "text-white";

// Componente para el Bloque de Oferta
const OfferBlock = ({ IconComponent, title, content, isPrimary }) => {
  // Clases condicionales para el contraste
  const cardClasses = isPrimary
    ? `bg-white border-4 border-[#F08000] shadow-xl hover:shadow-2xl`
    : 'bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg';
  
  const iconBg = isPrimary ? WHITE : 'bg-gray-200';
  
  return (
    <div className={`w-full p-6 rounded-2xl transition duration-300 transform hover:-translate-y-1 ${cardClasses}`}>
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full ${iconBg}`}>
          {/* Usamos el componente de React Icon */}
          <IconComponent className={`text-2xl ${BRAND_COLOR}`} />
        </div>
        <h3 className={`ml-4 text-xl font-bold text-gray-800`}>
          {title}
        </h3>
      </div>
      {/* Contenido HTML para el formato de los planes */}
      <div className="text-gray-700 leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};


// Sección de ofertas promocionales
const OffersSection = () => {
  
  // Contenido nuevo y formateado con HTML para negritas
  const offer1Content = `
    <p class="mb-3">¡Registra tu restaurante y disfruta el primer mes completamente gratis!</p>
    <p class="font-bold">Plan Básico:</p>
    <ul class="list-disc list-inside ml-4 text-sm">
      <li>Sin cuota fija</li>
      <li>10% por pedido (solo después del primer mes)</li>
    </ul>
    <p class="font-bold mt-2">Plan Premium:</p>
    <ul class="list-disc list-inside ml-4 text-sm">
      <li>30 USD/mes</li>
      <li>8% de comisión (solo después del primer mes)</li>
    </ul>
  `;

  const offer2Content = `
    <p>Los restaurantes que deseen máxima visibilidad pueden aparecer en nuestros banners promocionales destacados.</p>
    <p class="mt-3 font-bold ${BRAND_COLOR}">Paga solo el primer mes</p>
    <p class="text-sm mt-1">Con esta promoción, obtienes visibilidad preferente frente a los clientes, aumentando tus pedidos y el alcance de tu marca en la ciudad.</p>
  `;

  return (
    <div id="Ofertas" className="relative py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
            <span className={BRAND_COLOR}>Ofertas</span> Especiales
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Aprovecha nuestros beneficios de lanzamiento por tiempo limitado.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Columna izquierda: Bloques de Ofertas */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <OfferBlock
              IconComponent={FiGift}
              title="OFERTA 1 — Primer Mes Gratis"
              content={offer1Content}
              isPrimary={true} // Se destaca esta oferta por el borde naranja
            />
            
            <OfferBlock
              IconComponent={FiStar}
              title="OFERTA 2 — Banners Publicitarios Destacados"
              content={offer2Content}
              isPrimary={false}
            />
          </div>

          {/* Columna derecha: Mockups de screenshots de iPhone */}
          <div className="w-full lg:w-1/2 relative flex justify-center h-[550px]">
            
            {/* Mockup Trasero (Inicio Sesión) */}
            <div className="absolute w-64 h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transform -rotate-3 -translate-x-1/4 transition-all duration-500 hover:scale-[1.03] z-10">
              <img
                src={Inicio}
                alt="Screenshot de iPhone: Pantalla de Inicio de Sesión en la app"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Mockup Frontal (Home) */}
            <div className="absolute w-64 h-[500px] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transform rotate-6 translate-x-1/4 transition-all duration-500 hover:scale-[1.03] z-20">
              <img
                src={Home}
                alt="Screenshot de iPhone: Pantalla de Inicio en la app"
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

export default OffersSection;