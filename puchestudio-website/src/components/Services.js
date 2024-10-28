import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#FDFCFE] px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-12">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
            <p>
              Diseño y desarrollo de sitios web personalizados con las mejores
              tecnologías.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Aplicaciones Móviles</h3>
            <p>
              Soluciones móviles para que tu negocio esté al alcance de todos.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow">
            <h3 className="text-xl font-semibold mb-4">SEO & Marketing</h3>
            <p>
              Mejora el posicionamiento y visibilidad de tu sitio con nuestras
              estrategias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
