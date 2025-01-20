import React, { createContext, useState, useContext } from "react";

// Context oluştur
const DarkModeContext = createContext();

// Provider bileşeni
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode); // Tailwind için
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Hook: Context'i daha kolay kullanmak için
export const useDarkMode = () => useContext(DarkModeContext);
