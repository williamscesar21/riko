import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // <--- 1. Importamos Link
import logoBlanco from "../assets/logoBlanco.png";

const Navbar = () => {
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [ultimoScrollY, setUltimoScrollY] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const manejarScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > ultimoScrollY) {
        setMostrarNavbar(false);
      } else {
        setMostrarNavbar(true);
      }
      setUltimoScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, [ultimoScrollY]);

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  // <--- 2. Actualizamos los links. 
  // Nota: Usamos "/" antes del # para que si estás en /planes, el link te devuelva al Home
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Planes", href: "/planes" }, // <--- Nuevo link a Planes
    { name: "Servicios", href: "/#Servicios" },
    { name: "Contacto", href: "/#Contacto" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-transform duration-500 ease-in-out ${
          mostrarNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(255, 102, 0, 0.9)" }}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* Logo con Link al Home */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white">
            <img src={logoBlanco} alt="Logo Meal Monkey" className="h-10" />
          </Link>

          {/* Menú Desktop */}
          <ul className="hidden md:flex space-x-8 text-white">
            {links.map((link) => (
              <li key={link.name}>
                {/* Usamos Link en lugar de a */}
                <Link to={link.href} className="hover:text-orange-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón Burger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={alternarMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Móvil */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 text-white p-4 flex flex-col items-center shadow-lg transform transition-transform duration-300 ease-in-out z-40 mt-[4.5rem] ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ backgroundColor: "rgba(255, 102, 0, 0.95)" }} // Un poco más opaco para legibilidad
      >
        <div className="flex flex-col items-center mb-8 mt-12">
          <span className="text-2xl text-white font-bold">Menú</span>
        </div>

        <nav className="w-full">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                {/* Link en versión móvil */}
                <Link
                  to={link.href}
                  onClick={cerrarMenu}
                  className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-orange-500 cursor-pointer text-white"
                >
                  <span className="text-lg font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;