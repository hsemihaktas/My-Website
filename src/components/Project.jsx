import React, { useState, useEffect } from "react";
import ProjeCard from "./ProjeCard.jsx";

export const Project = () => {

    const [projects, setProjects] = useState([]);

  useEffect(() => {
    // JSON dosyasını fetch edin
    fetch("/projects.json") // JSON dosyanızın yolu
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("JSON verileri alınamadı:", error));
  }, []);
  return (
    <>
      <div className="py-3 mb-5">
        <div className="text-5xl pb-2">
          Projects
        </div>
        <div className="text-lg">
        {projects.map((project, index) => (
                <ProjeCard key={index} project={project} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Project;
