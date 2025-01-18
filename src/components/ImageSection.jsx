import React from "react";

const ImageSection = ({ project }) => {
  return (
    <>
      {project.imageFile && (
        <div>
          <img
            src={require(`../images/${project.imageFile}`)}
            alt={project.title}
            className="w-full h-80 object-contain lg:object-cover lg:object-top rounded-lg lg:hover:object-bottom transition-all transform duration-1000"
          />
        </div>
      )}
    </>
  );
};

export default ImageSection;
