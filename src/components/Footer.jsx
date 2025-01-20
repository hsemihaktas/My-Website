import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();
  return (
    <footer
      className={`py-4 ${
        darkMode ? "bg-[#1F2937] text-white" : "bg-[#FEF3E2] text-black"
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} {language === "TR" ? "Kişisel Web Sitem. Tüm hakları saklıdır." : "My Personal Website. All rights reserved."}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
