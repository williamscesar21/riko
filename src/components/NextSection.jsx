import React from 'react';
import TresTelefonos from '../assets/Tres telefonos fondo.png';

// Sección de bienvenida a la app
const NextSection = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white text-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        
        {/* Columna: imagen ilustrativa */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={TresTelefonos}
            alt="Tres teléfonos"
            className="w-full h-80 object-contain rounded-lg"
          />
        </div>

        {/* Columna: texto descriptivo */}
        <div className="md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Bienvenido a <span>Riko App</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Riko App es una plataforma digital de pedidos y delivery que conecta directamente a los restaurantes de Acarigua y Araure con sus clientes.
          </p>
          <p className="text-lg md:text-xl text-gray-600">
            A diferencia de otras aplicaciones impersonales, nuestra propuesta es local, cercana y enfocada únicamente en la ciudad, para que los restaurantes tengan mayor visibilidad y control de su negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
