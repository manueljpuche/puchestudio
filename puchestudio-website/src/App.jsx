import React from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Services from './components/Services';
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFE] text-[#000000]">
      <NavBar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
