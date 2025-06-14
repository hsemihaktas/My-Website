import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../data/projects.json";
import ImageSection from "../components/ImageSection";
import TechnologiesSection from "../components/TechnologiesSection";
import DescriptionSection from "../components/DescriptionSection";
import ButtonSection from "../components/ButtonSection";
import ToggleButton from "../components/ToggleButton";
import { useLanguage } from "../context/LanguageContext";

const ProjectDetail = () => {
  const { language } = useLanguage();

  const { projectUrl } = useParams();
  const project = data.find((proj) => proj.url === `/project/${projectUrl}`);
  const navigate = useNavigate();

  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Helmet>
        <title>{project.meta?.title[language]}</title>
        <meta name="title" content={project.meta?.title[language]} />
        <meta property="og:title" content={project.meta?.title[language]} />
        <meta
          name="description"
          content={project.meta?.description[language]}
        />
        <meta
          property="og:description"
          content={project.meta?.description[language]}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://hsemihaktas.vercel.app${project.url}`}
        />
      </Helmet>

      <div className="absolute top-4 right-4 z-10">
        <ToggleButton />
      </div>
      <div className="flex flex-col min-h-screen gap-8 font-medium py-12 lg:py-20 dark:bg-[#1F2937] bg-[#FEF3E2] ">
        <div className="max-w-screen-2xl m-4 lg:mx-auto p-8 rounded-lg shadow-xl h-auto lg:w-full dark:bg-[#374151] dark:text-white dark:border-[#4B5563] bg-[#D8C4B6] text-black border-[#D8C4B6] ">
          <div className="flex items-center mb-4 p-4">
            <button
              onClick={() => navigate("/")}
              className="dark:hover:text-[#1F2937] hover:text-[#FEF3E2] mr-4 dark:text-[#8EAED9] text-[#6F4F34]"
            >
              <span className="text-4xl">&#8592;</span>
            </button>
            <h3 className="text-3xl font-bold dark:text-[#8EAED9] text-[#6F4F34]">
              {project.title[language]}
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sol kısım - Resim */}
            <div className="w-auto lg:w-1/2 content-center">
              <ImageSection project={project} />
            </div>

            {/* Sağ kısım - Teknolojiler ve Açıklama */}
            <div className="w-full lg:w-1/2">
              <TechnologiesSection project={project} />
              <DescriptionSection project={project} />
              <ButtonSection project={project} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
