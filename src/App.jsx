import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Bye 2023!"]);
  const particleInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }
  useEffect(() => {
    setNewYearMessage(["Happy new year 2024!"]);
  }, []);
  return (
    <>
      <Particles
        init={particleInitialization}
        options={{ preset: "fireworks" }}
      />

      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
          />
        </span>
        <div className="z-50 text-white font-bold text-2xl"></div>
      </div>
    </>
  );
}

export default App;
