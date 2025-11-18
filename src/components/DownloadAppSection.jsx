import React from "react";
import Appstore from "../assets/Appstore.png";
import Playstore from "../assets/Playstore.png";
import DemoVideo from "../assets/RikoApp.mp4";

// Sección de descarga de la app
const DownloadAppSection = () => {
  return (
    <div className="relative overflow-hidden py-16 px-4">
      <div className="container mx-auto px-4">
        {/* Contenedor principal con fondo naranja */}
        <div className="relative z-10 bg-[#F08000] text-white rounded-[3rem] p-8 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Columna: video dentro de mockup de teléfono */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
              <div className="relative w-full max-w-sm mx-auto md:w-auto md:max-w-none">
                <div className="w-64 h-[450px] bg-gray-300 rounded-[2rem] shadow-2xl transform -rotate-3 transition-transform duration-500 ease-in-out overflow-hidden flex items-center justify-center">
                  <video
                    src={DemoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                </div>
              </div>
            </div>

            {/* Columna: texto descriptivo */}
            <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Descarga nuestra App Móvil
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Descubre comida deliciosa al alcance de tu mano.
              </p>
            </div>

            {/* Columna: botones de descarga (MEJORA DE UI/UX) */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start space-y-6">
              {/* Botón de Google Play (Ahora más grande y con ancho fijo) */}
              <a
                href="https://play.google.com/store/apps/details?id=com.williams.rikoapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full max-w-xs md:w-64 bg-black text-white border-2 border-white rounded-xl py-4 px-6 shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out hover:bg-gray-800"
              >
                <div className="w-8 h-8 mr-3">
                  <img src={Playstore} alt="Play Store" />
                </div>
                <div className="text-left">
                  <div className="text-sm">Descargar en</div>
                  <div className="font-extrabold text-xl">Google Play</div>
                </div>
              </a>

              {/* Botón de App Store (Mismo tamaño y estilo) */}
              <a
                href="https://apps.apple.com/ve/app/riko-app/id6752636269?l=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full max-w-xs md:w-64 bg-black text-white border-2 border-white rounded-xl py-4 px-6 shadow-xl transform hover:scale-[1.03] transition duration-300 ease-in-out hover:bg-gray-800"
              >
                <div className="w-8 h-8 mr-3">
                  <img src={Appstore} alt="App Store" />
                </div>
                <div className="text-left">
                  <div className="text-sm">Descargar en</div>
                  <div className="font-extrabold text-xl">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;