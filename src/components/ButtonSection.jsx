import { useLanguage } from "../context/LanguageContext";

const ButtonSection = ({ project }) => {
  const { language } = useLanguage();

  return (
    <>
      {(project.codeLink || project.projectSite) && (
        <div className="mt-4 flex flex-wrap gap-4 justify-end">
          {project.codeLink && (
            <button className="text-sm lg:text-base py-2 px-6 bg-[#F1F1F1] hover:text-white rounded-full shadow-lg transition duration-300 mb-4 dark:hover:bg-[#1F2937] dark:text-[#1F2937] hover:bg-[#B89A82] text-[#6F4F34]">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center"
              >
                {language === "TR" ? "Kodu Görüntüle" : "View Code"}
              </a>
            </button>
          )}
          {project.projectSite && (
            <button className="text-sm lg:text-base py-2 px-6 bg-[#F1F1F1] hover:text-white rounded-full shadow-lg transition duration-300 mb-4 dark:hover:bg-[#1F2937] dark:text-[#1F2937] hover:bg-[#B89A82] text-[#6F4F34]">
              <a
                href={project.projectSite}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center"
              >
                {language === "TR" ? "Web Siteyi Ziyaret Et" : "Visit Website"}
              </a>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default ButtonSection;
