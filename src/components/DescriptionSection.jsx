import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

const DescriptionSection = ({ project }) => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <div>
      <h2
        className={`text-2xl font-semibold ${
          darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"
        }`}
      >
        {language === "TR" ? "Projeye Genel Bakış" : "Project Overview"}
      </h2>
      <ul
        className={`list-disc pl-6 text-lg leading-relaxed ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        {project.description[language]
          .split("-")
          .map((item, index) =>
            item.trim() ? <li key={index}>{item.trim()}</li> : null
          )}
      </ul>
    </div>
  );
};

export default DescriptionSection;
