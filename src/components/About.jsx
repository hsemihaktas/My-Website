import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

export const About = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <div className="py-3 w-full">
        <div className="text-5xl pb-2 ">
          Who is{" "}
          <span className={`${darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"}`}>
            Semih
          </span>
          ?
        </div>
        <div className="text-lg ">
          As a Front-End developer specializing in ReactJS and JavaScript, my
          commitment to creating distinctive user experiences and staying
          up-to-date with the latest technology trends distinguishes me. I aim
          not only to write code but also to merge design aesthetics with
          user-friendly interfaces, striving to incorporate imagination and
          accuracy into our projects. This enthusiasm and dedication enable me
          to achieve exceptional outcomes while cooperating within a dynamic
          team.
        </div>
      </div>
      <div className="border-t w-full border-gray-300 my-line"></div>
    </>
  );
};

export default About;
