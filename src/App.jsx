import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Token from "./Components/Token";

const App = () => {
  return (
    <div className="min-h-screen w-full font-canterBurry bg-red-700 text-white">
      <Header />
      <Hero />
      <Token />
    </div>
  );
};

export default App;
