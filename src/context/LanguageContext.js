import React, { createContext, useContext, useState } from "react";

// Dil Context'i oluştur
const LanguageContext = createContext();

// Provider bileşeni
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("EN"); // Varsayılan dil Türkçe

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "TR" ? "EN" : "TR"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook: Context'e erişim için kullanılır
export const useLanguage = () => useContext(LanguageContext);
