import React from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

const ProjeCard = ({ project }) => {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();

  const handleDetailClick = () => {
    navigate(`${project.url}`);
  };

  return (
    <div
      className={`group lg:w-full w-full h-auto p-6 my-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300 rounded-lg border-2 
      ${
        darkMode
          ? "bg-[#374151] text-white border-[#4B5563]"
          : "bg-[#D8C4B6] text-black border-[#D8C4B6] "
      }`}
    >
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5 lg:mr-6">
          {project.imageFile && (
            <img
              className="w-full max-h-48 overflow-hidden object-cover aspect-auto object-top group-hover:object-bottom transition-all transform duration-1000"
              src={require(`../images/${project.imageFile}`)}
              alt={project.title}
            />
          )}
        </div>
        <div className="flex flex-col w-full lg:w-2/5">
          <h1
            className={`text-xl font-semibold mb-2 ${
              darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"
            }`}
          >
            {project.title}
          </h1>
          <ul className="custom-list text-sm  space-y-1">
            {project.shortDescription}
          </ul>
          <div className="flex mt-2 justify-end">
            <button
              className={`text-sm lg:text-base py-2 px-6  bg-[#F1F1F1]  hover:text-white rounded-full shadow-lg transition duration-300 mb-4
                ${
                  darkMode
                    ? "hover:bg-[#1F2937] text-[#1F2937]"
                    : "hover:bg-[#B89A82] text-[#6F4F34]"
                }`}
              onClick={handleDetailClick}
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjeCard;
