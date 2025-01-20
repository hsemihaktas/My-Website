import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
            darkMode ? "translate-x-8 bg-[#D8C4B6]" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
