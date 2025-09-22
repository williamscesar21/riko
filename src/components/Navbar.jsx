import React, { useState, useEffect } from "react";
import logoBlanco from "../assets/logoBlanco.png";

// Componente de navegación principal
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

  const links = [
    { name: "Riko", href: "#Home" },
    { name: "Ofertas", href: "#Ofertas" },
    { name: "Servicios", href: "#Servicios" },
    { name: "Contacto", href: "#Contacto" },
  ];

  return (
    <>
      {/* Barra superior fija */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-transform duration-500 ease-in-out ${
          mostrarNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(255, 102, 0, 0.7)" }}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 text-xl font-bold text-white">
            <img src={logoBlanco} alt="Logo Meal Monkey" className="h-10" />
          </div>

          {/* Menú horizontal en escritorio */}
          <ul className="hidden md:flex space-x-8 text-white">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-orange-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón burger para abrir menú móvil */}
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

      {/* Sidebar móvil desplegable */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 text-white p-4 flex flex-col items-center shadow-lg transform transition-transform duration-300 ease-in-out z-40 mt-[4.5rem] ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ backgroundColor: "rgba(255, 102, 0, 0.7)" }}
      >
        <div className="flex flex-col items-center mb-8 mt-12">
          <span className="text-2xl text-white">Menú</span>
        </div>

        <nav className="w-full">
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="flex items-center p-2 rounded-lg transition-colors duration-200 hover:bg-orange-400 cursor-pointer text-white"
                >
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
