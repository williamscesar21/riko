import React from "react";
import MujerEnsalada from "../assets/Mujer ensalada.png";
import logoNaranja from "../assets/logoNaranja.png";

// Sección principal del hero
const HeroSection = () => {
  return (
    <main id="Home" className="min-h-screen bg-white text-gray-800 px-4 py-24 md:px-16 flex flex-col items-center justify-center">
      {/* Contenido centralizado */}
      <section className="flex flex-col items-center text-center space-y-6 max-w-2xl">
        <img src={logoNaranja} alt="Riko Logo" className="w-56 h-auto" />
        <p className="text-4xl md:text-6xl font-bold leading-tight">
          <span className="text-[#F08000]">Pide</span> donde{" "}
          <span className="text-[#F08000]">quieras</span> y cuando{" "}
          <span className="text-[#F08000]">quieras</span>
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          La app de pedidos que te da control total sobre pagos, ventas y
          entregas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a className="bg-[#F08000] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-orange-600 cursor-pointer transition duration-300"
          href="https://wa.me/584121510662?text=Para%20registrarse%20en%20Riko%20App%2C%20deben%20indicar%20el%20nombre%20del%20restaurante%2C%20correo%2C%20direcci%C3%B3n%2C%20tel%C3%A9fono%2C%20y%20todo%20el%20men%C3%BA%20con%20las%20im%C3%A1genes%20de%20los%20productos.">
            Registra tu restaurante ¡Gratis!
          </a>
          <a href="#como-funciona" className="text-gray-600 hover:underline">
            ¿Cómo funciona?
          </a>
        </div>
      </section>

      {/* Imagen + beneficios juntos debajo */}
      <section className="flex flex-col md:flex-row items-center justify-center mt-16 space-y-12 md:space-y-0 md:space-x-12">
        {/* Imagen de la mujer */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={MujerEnsalada}
            alt="Mujer comiendo felizmente su ensalada"
            className="max-w-sm object-contain"
          />
        </div>

        {/* Beneficios destacados */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-center space-x-3 p-2">
            <div className="bg-gray-200 p-3 rounded-full">
              <span className="text-xl">🛵</span>
            </div>
            <div>
              <h3 className="font-semibold">¡Entrega Rápida!</h3>
              <p className="text-sm text-gray-600">
                Restaurantes optimizados para entregas rápidas
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <div className="bg-gray-200 p-3 rounded-full">
              <span className="text-xl">📦</span>
            </div>
            <div>
              <h3 className="font-semibold">¡Cualquier Restaurante Disponible!</h3>
              <p className="text-sm text-gray-600">
                Los restaurantes más populares a tu alcance
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <div className="bg-gray-200 p-3 rounded-full">
              <span className="text-xl">🍽️</span>
            </div>
            <div>
              <h3 className="font-semibold">¡Come en cualquier lugar!</h3>
              <p className="text-sm text-gray-600">
                Disfruta de tu comida fresca, crujiente y caliente
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
