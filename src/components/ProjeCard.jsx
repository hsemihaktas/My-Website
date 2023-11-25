import React from "react";

const ProjeCard = ({ project }) => {
  return (
    <>
      <div className="lg:w-full h-auto p-6 m-5 shadow-xl hover:shadow-2xl hover:scale-110 transition-all transform duration-500">
        <div className="flex items-start">
          {project.imageFile && (
            <img
              className="w-32 h-32 object-contain mr-4"
              src={require(`../images/${project.imageFile}`)}
              alt={project.baslik}
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-white">{project.title}</h1>
            <p className="text-sm mt-2 text-white">{project.description}</p>
          </div>
        </div>
        <div className="mt-4 mb-2 flex">
          {project.codeLink && (
            <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-orange-600 bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300 ml-auto">
              <a href={project.codeLink}>Code...</a>
            </button>
          )}
          {project.projectSite && (
            <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-orange-600 bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300 ml-2">
              <a href={project.projectSite}>Website...</a>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjeCard;
