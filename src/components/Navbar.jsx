import React, { useState, useEffect } from "react";

// --- ÍCONOS SVG INLINE (Sustituyen a react-icons/fi para garantizar la compilación) ---

// Icono de Menú Hamburguesa
const IconMenu = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>;
// Icono de Cerrar (X)
const IconX = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;
// Icono Home
const IconHome = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
// Icono de Ofertas (Moneda)
const IconDollar = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2m0 0l3 3m-3-3l-3 3m3-3v4.586a1 1 0 01-.293.707l-2.293 2.293M12 8h0L9 5m3 3V3m0 21V12" /></svg>;
// Icono de Servicios (Rayo/Zap)
const IconZap = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
// Icono de Contacto (Correo)
const IconMail = (props) => <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>;

// --- COMPONENTE PRINCIPAL ---

const Navbar = () => {
  const BRAND_COLOR = "#F08000"; // Naranja principal
  const BRAND_BG = "rgba(240, 128, 0, 0.95)"; // Naranja con 95% opacidad
  const [mostrarNavbar, setMostrarNavbar] = useState(true);
  const [ultimoScrollY, setUltimoScrollY] = useState(0);
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Lógica para ocultar/mostrar la barra al hacer scroll
  const manejarScroll = () => {
    if (typeof window !== "undefined") {
      // Ocultar al bajar, mostrar al subir
      if (window.scrollY > 100 && window.scrollY > ultimoScrollY) { 
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

  // Los enlaces ahora usan los componentes SVG definidos arriba
  const links = [
    { name: "Inicio", href: "#Home", Icon: IconHome },
    { name: "Ofertas", href: "#Ofertas", Icon: IconDollar },
    { name: "Servicios", href: "#Servicios", Icon: IconZap },
    { name: "Contacto", href: "#Contacto", Icon: IconMail },
  ];

  // Componente SVG simple para el logo (Sustituye a logoBlanco.png)
  const LogoSVG = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" fill="white" className="text-white" />
      <path d="M12 18V6" stroke={BRAND_COLOR} />
      <path d="M9 9l3-3 3 3" stroke={BRAND_COLOR} />
    </svg>
  );

  return (
    <>
      {/* Barra superior fija */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out backdrop-blur-sm ${
          mostrarNavbar ? "translate-y-0 shadow-lg" : "-translate-y-full"
        }`}
        style={{ backgroundColor: BRAND_BG }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          
          {/* Logo (Texto + SVG simple) */}
          <a href="#Home" className="flex items-center space-x-2 text-xl font-bold text-white cursor-pointer" onClick={cerrarMenu}>
            {/* SVG placeholder de logo */}
            <span className="tracking-wider">RIKO</span>
          </a>

          {/* Menú horizontal en escritorio */}
          <ul className="hidden md:flex space-x-10 text-white font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="relative group transition-colors duration-200 hover:text-white after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-0 after:left-1/2 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }} // Color de texto ligeramente transparente
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón burger para abrir/cerrar menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={alternarMenu}
              className="text-white focus:outline-none p-2 rounded-lg transition duration-200 hover:bg-orange-600"
            >
              {menuAbierto ? (
                <IconX className="w-6 h-6" /> // Icono de cerrar (SVG inline)
              ) : (
                <IconMenu className="w-6 h-6" /> // Icono de menú (SVG inline)
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay para el menú móvil */}
      {menuAbierto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" 
          onClick={cerrarMenu}
        ></div>
      )}

      {/* Sidebar móvil desplegable */}
      <aside
        className={`fixed top-0 right-0 h-screen w-64 text-white p-6 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ backgroundColor: BRAND_COLOR, paddingTop: '6rem' }} // Asegura que empiece debajo de la Navbar
      >
        <nav className="w-full">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={cerrarMenu} 
                  className="flex items-center space-x-4 p-3 rounded-xl transition-colors duration-200 hover:bg-white hover:text-gray-800 cursor-pointer text-white text-lg font-semibold shadow-md"
                >
                  {/* Uso del componente SVG inline como Icono */}
                  <link.Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mt-auto pt-8 text-center text-sm opacity-80 border-t border-white/30">
            <p>&copy; Riko Delivery App 2024</p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;