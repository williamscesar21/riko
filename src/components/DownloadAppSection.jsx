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

            {/* Columna: botones de descarga */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start space-y-4">
              <a
                href="#"
                className="flex items-center bg-black text-white border-2 border-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-8 h-8 mr-3 rounded-lg">
                  <img src={Playstore} alt="Play Store" />
                </div>
                <div>
                  <div className="text-xs">Descargar en</div>
                  <div className="font-bold text-lg">Google Play</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center bg-black text-white border-2 border-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-8 h-8 mr-3 rounded-lg">
                  <img src={Appstore} alt="App Store" />
                </div>
                <div>
                  <div className="text-xs">Descargar en</div>
                  <div className="font-bold text-lg">App Store</div>
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
