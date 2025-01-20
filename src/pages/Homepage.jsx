import React from "react";
import WelcomePage from "../components/WelcomePage.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Project from "../components/Project.jsx";
import Footer from "../components/Footer.jsx";
import ToggleButton from "../components/ToggleButton.jsx";
import { useDarkMode } from "../context/DarkModeContext";

function App() {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <ToggleButton />
      </div>
      <div
        className={`relative lg:flex h-auto ${
          darkMode ? "bg-[#1F2937] text-white" : "bg-[#FEF3E2] text-black"
        }`}
      >
        <div className="w-full lg:w-1/2 px-4 h-full flex items-center pt-24 lg:pt-0 lg:fixed">
          <WelcomePage darkMode={darkMode}/>
        </div>
        <div className="flex flex-wrap h-full w-full lg:w-1/2 px-4 lg:p-20 lg:ml-auto font-medium">
          <About darkMode={darkMode}/>
          <Education darkMode={darkMode}/>
          <Project darkMode={darkMode}/>
        </div>
        <div className="absolute w-full bottom-0 left-0 font-medium">
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </>
  );
}

export default App;
