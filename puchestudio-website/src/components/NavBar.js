import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png"; // Logo inicial
import logoScrolled from "../assets/logo-scrolled.png"; // Logo cuando se hace scroll

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full py-4 px-8 z-10 transition-all duration-300 ${scrolled ? 'bg-[#1487DA]/90' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center">
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${scrolled ? 'translate-y-0' : '-translate-y-10'}`}>
          <img
            className={`transition-transform duration-300 ${scrolled ? 'w-[60px]' : 'w-[100px]'}`}
            src={scrolled ? logoScrolled : logo}
            alt="Logo"
          />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-[#66B2FF] transition-colors">Home</a></li>
          <li><a href="#services" className="hover:text-[#66B2FF] transition-colors">Servicios</a></li>
          <li><a href="#contact" className="hover:text-[#66B2FF] transition-colors">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
