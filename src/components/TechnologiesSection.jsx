import React from "react";

const TechnologiesSection = ({ project }) => {
  return (
    <div className="w-full text-[#555] mb-6">
  <h2 className="text-2xl font-semibold text-[#213555] mb-4">Technologies Used</h2>
  <ul className="flex flex-wrap gap-2 mb-6">
    {project.technologies && project.technologies.length > 0 ? (
      project.technologies.map((tech, index) => (
        <li
          key={index}
          className="relative group p-1 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16"
        >
          <img
            src={require(`../images/svg/${tech}.svg`)}
            alt={tech}
            className="w-full h-full object-contain"
          />
          {/* Tooltip */}
          <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-white bg-[#213555] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {tech}
          </span>
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
