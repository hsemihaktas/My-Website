import React from "react";

const ButtonSection = ({ project }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-end">
      {project.codeLink && (
        <button className="text-sm lg:text-base py-2 px-6 text-[#213555] bg-[#F1F1F1] hover:bg-[#4F709C] hover:text-white rounded-full shadow-lg transition duration-300 mb-4 w-full md:w-auto">
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
        <button className="text-sm lg:text-base py-2 px-6 text-[#213555] bg-[#F1F1F1] hover:bg-[#4F709C] hover:text-white rounded-full shadow-lg transition duration-300 mb-4 w-full md:w-auto">
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
  );
};

export default ButtonSection;
