import React from "react";
import logoNaranja from "../assets/logoNaranja.png";
import inicio from "../assets/Inicio.png";
import Hamburguesa from "../assets/Hamburguesa Pollo.jpeg";

// Sección de contacto
const ContactSection = () => {
  return (
    <section id="Contacto" className="bg-white py-16">
      <div className="container mx-auto px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Columna izquierda: datos de contacto */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 inline-block pb-2 text-center lg:text-left">
                <span>
                  ¡Escríbenos!
                  <div className="bg-[#F08000] h-1 rounded-full mt-4"></div>
                </span>{" "}
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-[#F08000] p-2 m-2 rounded-full">
                  <span className="text-white">📞</span>
                </div>
                <p>04121510662</p>
              </div>
              <div className="flex items-center">
                <div className="bg-[#F08000] p-2 m-2 rounded-full">
                  <span className="text-white">📧</span>
                </div>
                <p>webbonding21@gmail.com</p>
              </div>
            </div>

            <div>
              <img src={logoNaranja} alt="Logo Riko" className="w-96" />
            </div>
          </div>

          {/* Columna derecha: imágenes tipo teléfono */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-64 h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl rotate-6">
              <img
                src={Hamburguesa}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-20 w-64 h-[500px] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={inicio}
                alt="Inicio Sesion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
