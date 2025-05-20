
const ImageSection = ({ project }) => {
  return (
    <>
      {project.imageFile && (
        <div>
          <img
            src={`/images/${project.imageFile}`}
            alt={project.title}
            className="w-full max-h-48 lg:max-h-96 overflow-hidden object-cover object-top rounded-lg hover:object-bottom transition-all transform duration-1000"
          />
        </div>
      )}
    </>
  );
};

export default ImageSection;
