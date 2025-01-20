import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/projects.json";
import ImageSection from "../components/ImageSection";
import TechnologiesSection from "../components/TechnologiesSection";
import DescriptionSection from "../components/DescriptionSection";
import ButtonSection from "../components/ButtonSection";
import ToggleButton from "../components/ToggleButton";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

const ProjectDetail = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  const { projectUrl } = useParams();
  const project = data.find((proj) => proj.url === `/project/${projectUrl}`);
  const navigate = useNavigate();

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <ToggleButton />
      </div>
      <div
        className={`flex flex-col min-h-screen gap-8 font-medium py-12 lg:py-20 ${
          darkMode ? "bg-[#1F2937] " : "bg-[#FEF3E2] "
        }`}
      >
        <div
          className={`max-w-screen-2xl m-4 lg:mx-auto p-8 rounded-lg shadow-xl h-auto lg:w-full
      ${
        darkMode
          ? "bg-[#374151] text-white border-[#4B5563]"
          : "bg-[#D8C4B6] text-black border-[#D8C4B6] "
      }`}
        >
          <div className="flex items-center mb-4 p-4">
            <button
              onClick={() => navigate("/")}
              className={`hover:text-[#4F709C] mr-4 ${
                darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"
              }`}
            >
              <span className="text-4xl">&#8592;</span>
            </button>
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"
              }`}
            >
              {project.title[language]}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sol kısım - Resim */}
            <div className="w-auto lg:w-1/2 content-center">
              <ImageSection project={project} />
            </div>

            {/* Sağ kısım - Teknolojiler ve Açıklama */}
            <div className="w-full lg:w-1/2">
              <TechnologiesSection darkMode={darkMode} project={project} />
              <DescriptionSection darkMode={darkMode} project={project} />
              <ButtonSection darkMode={darkMode} project={project} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
