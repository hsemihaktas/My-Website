import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import data from "../data/projects.json";
import { useLanguage } from "../context/LanguageContext";

export const Project = () => {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
  }, []);
  return (
    <>
      <div className="py-3 mb-5">
        <div className="text-5xl pb-2">{language === "TR" ? "Projeler" : "Projects"}</div>
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
