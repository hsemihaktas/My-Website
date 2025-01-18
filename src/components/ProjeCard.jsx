import React from "react";
import { useNavigate } from "react-router-dom";

const ProjeCard = ({ project }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`${project.url}`);
  };

  return (
    <div className="group lg:w-full w-full bg-[#D8C4B6] h-auto p-6 my-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300 rounded-lg border-2 border-[#D8C4B6]">
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
          <h1 className="text-xl font-semibold text-[#213555] mb-2">
            {project.title}
          </h1>
          <ul className="custom-list text-sm text-[#555] space-y-1">
            {project.shortDescription}
          </ul>
          <div className="flex mt-2 justify-end">
            <button
              className="text-sm lg:text-base py-2 px-6 text-[#213555] bg-[#F1F1F1] hover:bg-[#4F709C] hover:text-white rounded-full shadow-lg transition duration-300 mb-4"
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
