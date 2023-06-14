import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Token from "./Components/Token";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full font-canterBurry text-white">
      <Header />
      <Hero />
      <About />
      <Token />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
