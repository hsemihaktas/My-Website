import React from "react";

const ImageSection = ({ project }) => {
  return (
    <>
      {project.imageFile && (
        <div className="w-auto lg:w-1/2">
          <img
            src={require(`../images/${project.imageFile}`)}
            alt={project.title}
            className="w-full h-80 object-contain lg:object-cover lg:object-top rounded-lg mb-6 lg:hover:object-bottom transition-all transform duration-1000"
          />
        </div>
      )}
    </>
  );
};

export default ImageSection;
