import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

import sunWhiteIcon from "../assets/SunWhiteMode.svg";
import sunDarkMode from "../assets/SunDarkMode.svg"; 
import moonWhiteIcon from "../assets/MoonWhiteMode.svg";
import moonDarkIcon from "../assets/MoonDarkMode.svg";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={toggleLanguage}
        className="font-semibold text-lg dark:text-white text-black"
      >
        {language === "TR" ? "TR | " : "EN | "}
      </button>
      <img
        src={darkMode ? sunDarkMode : sunWhiteIcon}
        className="h-6 w-6"
        alt="Sun Icon"
      />
      
      <button
        onClick={toggleDarkMode}
        title="Toggle Dark Mode"
        className="relative w-12 h-6 rounded-full transition-colors duration-300 dark:bg-gray-700 bg-gray-300"
      >
        <span
          className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 dark:translate-x-6 translate-x-0"
        />
      </button>
      
      <img
        src={darkMode ? moonDarkIcon : moonWhiteIcon}
        className="h-6 w-6"
        alt="Moon Icon"
      />
    </div>
  );
};

export default ToggleButton;
