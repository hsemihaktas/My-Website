import React from "react";

const ProjeCard = ({ project }) => {
  return (
    <>
      <div className="lg:w-full bg-[#D8C4B6] h-auto p-6 my-10 shadow-lg hover:shadow-xl hover:scale-110 transition-all transform duration-500">
        <div className="flex items-start">
          {project.imageFile && (
            <img
              className="w-32 h-32 object-contain mr-4"
              src={require(`../images/${project.imageFile}`)}
              alt={project.baslik}
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-[#213555]">
              {project.title}
            </h1>
            <ul className="custom-list mt-2">
              {project.description
                .split("-")
                .map(
                  (item, index) =>
                    item.trim() && <li key={index}>{item.trim()}</li>
                )}
            </ul>
          </div>
        </div>
        <div className="mt-4 mb-2 flex flex-row-reverse gap-2">
          {project.codeLink && (
            <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-[#213555] bg-[#4F709C] rounded-lg shadow hover:shadow-md transition duration-300">
              <a href={project.codeLink}>Code...</a>
            </button>
          )}
          {project.projectSite && (
            <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-[#213555] bg-[#4F709C] rounded-lg shadow hover:shadow-md transition duration-300">
              <a href={project.projectSite}>Website...</a>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjeCard;
