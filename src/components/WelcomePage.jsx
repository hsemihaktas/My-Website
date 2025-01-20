/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import ProfilePicture from "../images/profilePicture.jpg";
import SocialIcons from "./SocialIcons";
import { useDarkMode } from "../context/DarkModeContext";

export const WelcomePage = () => {
  const { darkMode } = useDarkMode();

  const words = [
    "Front-end Developer",
    "Software Engineer",
    "Computer Engineer",
  ];
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const animateText = () => {
      const currentWord = words[currentWordIndex];

      if (currentIndex === currentWord.length) {
        if (currentWordIndex === words.length - 1) {
          setCurrentIndex(0);
          setCurrentWordIndex(0);
        } else {
          setCurrentIndex(0);
          setCurrentWordIndex(currentWordIndex + 1);
        }
      } else {
        setText(currentWord.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    };

    const animationInterval = setInterval(animateText, 300);

    return () => clearInterval(animationInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, currentWordIndex]);
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/3 h-1/3 ">
          <img
            src={ProfilePicture}
            className="w-full h-full object-cover rounded-full"
          ></img>
        </div>
        <div className="p-5 text-center lg:text-left">
          <div className="text-5xl font-bold">My name is Semih</div>
          <div>
            <h1 className="text-2xl font-medium">
              I'm{" "}
              <span
                className={`${darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"}`}
              >
                {text}
              </span>
              <span className="cursor">|</span>
            </h1>
          </div>

          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
