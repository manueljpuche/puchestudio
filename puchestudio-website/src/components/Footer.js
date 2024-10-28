import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#000000] text-[#FDFCFE] py-6 px-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">Síguenos en nuestras redes sociales</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-[#1487DA] hover:text-[#66B2FF]"><FaFacebook size={24} /></a>
          <a href="https://instagram.com" className="text-[#1487DA] hover:text-[#66B2FF]"><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" className="text-[#1487DA] hover:text-[#66B2FF]"><FaLinkedin size={24} /></a>
        </div>
        <p>© 2024 PUCHE STUDIO | Barranquilla, Colombia</p>
      </div>
    </footer>
  );
}

export default Footer;
