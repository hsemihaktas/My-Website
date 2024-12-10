import React from "react";

const TechnologiesSection = ({ project }) => {
  return (
    <div className="w-full text-[#555] mb-6">
      <h2 className="text-2xl font-semibold text-[#213555] mb-4">Technologies Used</h2>
      <ul className="flex flex-wrap gap-4 mb-6">
        {project.technologies && project.technologies.length > 0 ? (
          project.technologies.map((tech, index) => (
            <li
              key={index}
              className="text-[#213555] text-sm bg-[#F1F1F1] px-4 py-2 rounded-full shadow-lg"
            >
              {tech}
            </li>
          ))
        ) : (
          <li className="text-[#555]">No technologies listed.</li>
        )}
      </ul>
    </div>
  );
};

export default TechnologiesSection;
