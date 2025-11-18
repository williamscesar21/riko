import React from "react";
// 1. IMPORTAR LOS ÍCONOS DESDE REACT ICONS
import { FiPhone, FiMail } from 'react-icons/fi'; 

import logoNaranja from "../assets/logoNaranja.png";
import inicio from "../assets/Inicio.png";
import Hamburguesa from "../assets/Hamburguesa Pollo.jpeg";

// Sección de contacto mejorada
const ContactSection = () => {
  // Color principal de la marca
  const BRAND_COLOR = "bg-[#F08000]"; 
  const TEXT_COLOR = "text-[#F08000]"; 

  // Componente de Ícono y Texto para reutilizar
  // Recibe el componente de ícono real como prop
  const ContactItem = ({ IconComponent, text, link, type }) => (
    <a 
      href={link} 
      className="flex items-center space-x-4 p-4 rounded-xl transition duration-300 hover:bg-gray-50 group"
    >
      <div className={`p-3 rounded-full ${BRAND_COLOR} shadow-md group-hover:shadow-lg transition flex items-center justify-center`}>
        {/* Usamos el componente de React Icon aquí */}
        <IconComponent className="text-white text-xl" />
      </div>
      <p className="text-gray-700 text-lg font-medium group-hover:text-gray-900 transition">{text}</p>
    </a>
  );

  return (
    <section id="Contacto" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl"> 
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Columna izquierda: datos de contacto y logo */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 lg:pr-16">
            
            {/* Título de Contacto */}
            <div className="mb-12">
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                Contáctanos
              </h2>
              <div className={`h-1 w-24 ${BRAND_COLOR} rounded-full mt-4`}></div>
            </div>

            {/* Bloque de Contacto (Usando React Icons) */}
            <div className="space-y-6 mb-12">
              <ContactItem 
                IconComponent={FiPhone} // 2. Usando el ícono de teléfono
                text="04121510662" 
                link="tel:+584121510662" 
              />
              <ContactItem 
                IconComponent={FiMail} // 3. Usando el ícono de correo
                text="webbonding21@gmail.com" 
                link="mailto:webbonding21@gmail.com" 
              />
            </div>
            
            {/* Logo */}
            <div className="mt-12">
              <img 
                src={logoNaranja} 
                alt="Logo Riko" 
                className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto" 
              />
            </div>
          </div>

          {/* Columna derecha: Imágenes tipo teléfono (Mockups dinámicos) */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end h-[600px] items-center">
            
            {/* Mockup Trasero (Hamburguesa) - Menos rotación, más sombra */}
            <div className={`relative w-72 h-[550px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl ${TEXT_COLOR} transform -rotate-3 transition-transform duration-500 ease-in-out`}> 
              <img
                src={Hamburguesa}
                alt="Hamburguesa Riko"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mockup Frontal (Inicio Sesión) - Superpuesto, sin rotación*/}
            <div className="absolute w-72 h-[550px] bg-gray-300 rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white transition-all duration-500 ease-in-out hover:scale-[1.03] z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src={inicio}
                alt="Inicio Sesion App"
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