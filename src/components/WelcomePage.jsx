/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ProfilePicture from "../images/profilePicture.jpg";
import SocialIcons from "./SocialIcons";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

export const WelcomePage = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/3 h-1/3 ">
          <img
            src={ProfilePicture}
            className="w-full h-full object-cover rounded-full"
          ></img>
        </div>
        <div className="p-6 text-center lg:text-left">
          <div className="text-5xl font-bold">
            {language === "TR" ? "Benim adım Semih" : "My name is Semih"}
          </div>
          <div>
            <h1 className="text-2xl font-medium mt-2">
              {language === "TR" ? "Ben " : "I'm "}
              <span
                className={`${darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"}`}
              >
                {language === "TR" ? "Ön Yüz Geliştiricisiyim" : "Front-end Developer"}
              </span>
            </h1>
          </div>

          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
