import React from "react";

const ButtonSection = ({ darkMode, project }) => {
  return (
    <>
      {(project.codeLink || project.projectSite) && (
        <div className="mt-4 flex flex-wrap gap-4 justify-end">
          {project.codeLink && (
            <button
              className={`text-sm lg:text-base py-2 px-6  bg-[#F1F1F1]  hover:text-white rounded-full shadow-lg transition duration-300 mb-4
              ${
                darkMode
                  ? "hover:bg-[#1F2937] text-[#1F2937]"
                  : "hover:bg-[#B89A82] text-[#6F4F34]"
              }`}
            >
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center"
              >
                View Code
              </a>
            </button>
          )}
          {project.projectSite && (
            <button
              className={`text-sm lg:text-base py-2 px-6  bg-[#F1F1F1]  hover:text-white rounded-full shadow-lg transition duration-300 mb-4
              ${
                darkMode
                  ? "hover:bg-[#1F2937] text-[#1F2937]"
                  : "hover:bg-[#B89A82] text-[#6F4F34]"
              }`}
            >
              <a
                href={project.projectSite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center"
              >
                Visit Website
              </a>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ButtonSection;
