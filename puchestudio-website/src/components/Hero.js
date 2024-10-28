import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-[#1487DA] text-[#000000] px-8 pt-20 relative"
    >
      {/* Espacio para la imagen que vas a agregar */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
      
      {/* Contenido del Hero */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Desarrollamos tu sitio web perfecto
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Modernidad, eficiencia y personalización para tu negocio.
        </p>
        <a
          href="#services"
          className="bg-[#66B2FF] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#1487DA] hover:text-[#FDFCFE] transition-all"
        >
          Descubre nuestros servicios
        </a>
      </div>
    </section>
  );
};

export default Hero;
