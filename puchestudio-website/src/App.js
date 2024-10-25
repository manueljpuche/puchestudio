import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
