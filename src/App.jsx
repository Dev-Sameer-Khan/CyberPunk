import React from "react";
import Crosshair from "./components/Crosshair";
import Canvass from "./components/Canvass";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Crosshair />
      <section className="overflow-hidden">
        <Canvass />
        <Hero />
      </section>
    </>
  );
};

export default App;
