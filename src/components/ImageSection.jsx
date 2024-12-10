import React from "react";

const ImageSection = ({ project }) => {
  return (
    <>
      {project.imageFile && (
        <div className="w-full lg:w-1/2">
          <img
            src={require(`../images/${project.imageFile}`)}
            alt={project.title}
            className="w-full h-auto object-contain rounded-lg mb-6"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
};

export default ImageSection;
