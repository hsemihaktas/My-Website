import { useLanguage } from "../context/LanguageContext";

const TechnologiesSection = ({ project }) => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full mb-6">
      <h2
        className="text-2xl font-semibold mb-4 dark:text-[#8EAED9] text-[#6F4F34]"
      >
        {language === "TR" ? "Kullanılan Teknolojiler" : "Technologies Used"}
      </h2>
      <ul className="flex flex-wrap gap-2 mb-6">
        {project.technologies && project.technologies.length > 0 ? (
          project.technologies.map((tech, index) => (
            <li
              key={index}
              className="relative group p-1 flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16"
            >
              <img
                src={require(`../assets/${tech}.svg`)}
                alt={tech}
                className="w-full h-full object-contain"
              />

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
