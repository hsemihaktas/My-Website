import React from "react";

const DescriptionSection = ({ project }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#213555]">Project Overview</h2>
      <ul className="list-disc pl-6 text-[#555] text-lg leading-relaxed">
        {project.description
          .split("-")
          .map((item, index) =>
            item.trim() ? <li key={index}>{item.trim()}</li> : null
          )}
      </ul>
    </div>
  );
};

export default DescriptionSection;
