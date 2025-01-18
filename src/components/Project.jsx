import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import data from "../data/projects.json";

export const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
      setProjects(data);
    }, []);
  return (
    <>
      <div className="py-3 mb-5">
        <div className="text-5xl pb-2">
          Projects
        </div>
        <div className="text-lg">
        {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Project;
