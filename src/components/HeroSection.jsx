import React from "react";
// 1. Importar los íconos necesarios de React Icons
import { FiClock, FiShoppingBag, FiMapPin, FiArrowRight } from 'react-icons/fi';
import logoNaranja from "../assets/logoNaranja.png";
import MujerEnsalada from "../assets/Mujer ensalada.png";

// Componente para un ítem de beneficio
const BenefitItem = ({ IconComponent, title, description, color }) => (
  <div className="flex items-start space-x-4 p-4 transition duration-300 hover:bg-gray-50 rounded-xl">
    <div className={`p-3 rounded-full ${color} bg-opacity-10 flex-shrink-0 mt-1`}>
      <IconComponent className={`${color} text-2xl`} />
    </div>
    <div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

// Sección principal del hero
const HeroSection = () => {
  const BRAND_COLOR = "text-[#F08000]";
  const BG_COLOR = "bg-[#F08000]";

  return (
    <main id="Home" className="min-h-screen bg-white text-gray-800 py-24 md:py-32 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* === SECCIÓN SUPERIOR: TÍTULO Y CTA (CALL TO ACTION) === */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <img src={logoNaranja} alt="Riko Logo" className="w-40 h-auto mb-4" /> {/* Logo más pequeño y refinado */}
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className={BRAND_COLOR}>Pide</span> donde{" "}
            <span className={BRAND_COLOR}>quieras</span> y cuando{" "}
            <span className={BRAND_COLOR}>quieras</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            La app de pedidos que te da <b>control total</b> sobre pagos, ventas y
            entregas, conectando a los mejores restaurantes con sus clientes.
          </p>
          
          {/* Botones de CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <a 
              className={`flex items-center ${BG_COLOR} text-white font-bold text-lg py-4 px-8 rounded-full shadow-2xl hover:shadow-xl transition duration-300 transform hover:scale-105`}
              href="https://wa.me/584228014719?text=Para%20registrarse%20en%20Riko%20App%2C%20deben%20indicar%20el%20nombre%20del%20restaurante%2C%20correo%2C%20direcci%C3%B3n%2C%20tel%C3%A9fono%2C%20y%20todo%20el%20men%C3%BA%20con%20las%20im%C3%A1genes%20de%20los%20productos."
              target="_blank"
              rel="noopener noreferrer"
            >
              Registra tu restaurante ¡Gratis!
              <FiArrowRight className="ml-2" />
            </a>
            <a href="#como-funciona" className="flex items-center text-gray-700 font-semibold hover:text-gray-900 transition duration-300 group">
              ¿Cómo funciona? 
              <span className="ml-2 group-hover:translate-x-1 transition duration-300">→</span>
            </a>
          </div>
        </section>

        {/* === SECCIÓN INFERIOR: IMAGEN Y BENEFICIOS === */}
        <section className="flex flex-col lg:flex-row items-center justify-center mt-20 md:mt-32 gap-16">
          
          {/* Imagen de la mujer (Izquierda en desktop, arriba en mobile) */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <img
              src={MujerEnsalada}
              alt="Mujer comiendo felizmente su ensalada"
              className="w-full max-w-md lg:max-w-lg object-contain rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
            />
          </div>

          {/* Beneficios destacados (Derecha en desktop, abajo en mobile) */}
          <div className="w-full lg:w-1/2 space-y-8 order-1 lg:order-2">
            
            <BenefitItem 
              IconComponent={FiClock} // Icono de Reloj (Velocidad)
              title="¡Entrega Súper Rápida!"
              description="Restaurantes optimizados y logística ágil para que tu comida llegue cuando la necesitas."
              color={BRAND_COLOR}
            />
            
            <BenefitItem 
              IconComponent={FiShoppingBag} // Icono de Bolsa (Variedad)
              title="¡Cualquier Restaurante a tu Alcance!"
              description="Accede a la lista de restaurantes más populares y variados de tu zona, todo en una app."
              color={BRAND_COLOR}
            />
            
            <BenefitItem 
              IconComponent={FiMapPin} // Icono de Pin de Mapa (Comer en cualquier lugar)
              title="¡Disfruta donde quieras!"
              description="Recibe tu pedido fresco y caliente, listo para disfrutar en tu casa, oficina o donde sea."
              color={BRAND_COLOR}
            />
            
          </div>
        </section>
      </div>
    </main>
  );
};

export default HeroSection;