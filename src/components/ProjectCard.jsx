import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const ProjeCard = ({ project }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Dil bazında proje verisini alıyoruz
  const title = project.title[language];
  const shortDescription = project.shortDescription[language];

  const handleDetailClick = () => {
    navigate(`${project.url}`);
  };

  return (
    <div className="group lg:w-full w-full h-auto p-6 my-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all transform duration-300 rounded-lg border-2 dark:bg-[#374151] dark:text-white dark:border-[#4B5563] bg-[#f1dfd4] text-black border-[#D8C4B6]">
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5 lg:mr-6">
          {project.imageFile && (
            <img
              className="w-full max-h-48 overflow-hidden object-cover aspect-auto object-top group-hover:object-bottom transition-all transform duration-1000"
              src={`/images/${project.imageFile}`}
              alt={title}
            />
          )}
        </div>
        <div className="flex flex-col w-full lg:w-2/5">
          <h2 className="text-xl font-semibold mb-2 dark:text-[#8EAED9]text-[#6F4F34]">
            {title}
          </h2>
          <div className="custom-list text-sm space-y-1">
            {shortDescription}
          </div>
          <div className="flex mt-2 justify-end">
            <button
              className="text-sm lg:text-base py-2 px-6 rounded-full shadow-lg transition duration-300 mb-4 bg-[#F1F1F1] hover:bg-[#B89A82] dark:hover:bg-[#1F2937] text-[#6F4F34] dark:text-[#1F2937] hover:text-white dark:hover:text-white"
              onClick={handleDetailClick}
            >
              {language === "en" ? "View Detail" : "Detayı Gör"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjeCard;
