import React from "react";

const ProjeCard = ({ project }) => {
  return (
    <div className="lg:w-full w-full bg-[#D8C4B6] h-auto p-6 my-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300 rounded-lg border-2 border-[#D8C4B6]">
      <div className="flex flex-col lg:flex-row items-center">
        {project.imageFile && (
          <img
            className="w-full lg:w-1/3 h-48 object-contain mb-4 lg:mb-0 lg:mr-6"
            src={require(`../images/${project.imageFile}`)}
            alt={project.title}
          />
        )}
        <div className="flex flex-col w-full lg:w-2/3">
          <h1 className="text-xl font-semibold text-[#213555] mb-2">{project.title}</h1>
          <ul className="custom-list text-sm text-[#555] space-y-1">
            {project.shortDescription}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-4">
        {project.codeLink && (
          <button className="text-sm lg:text-base py-2 px-4 text-white bg-[#4F709C] hover:bg-[#213555] rounded-lg shadow hover:shadow-lg transition duration-300">
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
          </button>
        )}
        {project.projectSite && (
          <button className="text-sm lg:text-base py-2 px-4 text-white bg-[#4F709C] hover:bg-[#213555] rounded-lg shadow hover:shadow-lg transition duration-300">
            <a href={project.projectSite} target="_blank" rel="noopener noreferrer">Website</a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjeCard;
