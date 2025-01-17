import React from "react";

const ImageSection = ({ project }) => {
  return (
    <>
      {project.imageFile && (
        <div className="w-full lg:w-1/2">
          <img
            src={require(`../images/${project.imageFile}`)}
            alt={project.title}
            className="w-full h-96 object-cover object-top rounded-lg mb-6 hover:object-bottom transition-all transform duration-1000"
          />
        </div>
      )}
    </>
  );
};

export default ImageSection;
