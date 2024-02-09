import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

function App() {
  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };
  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          Happy new year 2024!
        </span>
        <div className="z-50 text-white font-bold text-2xl"></div>
      </div>
    </>
  );
}

export default App;
