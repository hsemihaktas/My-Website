import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/projects.json";
import ImageSection from "../components/ImageSection";
import TechnologiesSection from "../components/TechnologiesSection";
import DescriptionSection from "../components/DescriptionSection";
import ButtonSection from "../components/ButtonSection";
import Footer from "../components/Footer";

const ProjectDetail = () => {
  const { projectUrl } = useParams();
  const project = data.find((proj) => proj.url === `/projects/${projectUrl}`);
  const navigate = useNavigate();

  if (!project) return <div>Project not found</div>;

  return (
    <div className="flex flex-col min-h-screen bg-[#FEF3E2] gap-8">
      <div className="flex-grow max-w-7xl mx-auto bg-[#D8C4B6] mt-8 p-8 rounded-lg shadow-xl">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-[#213555] hover:text-[#4F709C] mr-4"
          >
            <span className="text-4xl">&#8592;</span>
          </button>
          <h1 className="text-3xl font-bold text-[#213555]">{project.title}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol kısım - Resim */}
          <ImageSection project={project} />

          {/* Sağ kısım - Teknolojiler ve Açıklama */}
          <div className="w-full lg:w-1/2 text-[#555] mb-6">
            <TechnologiesSection project={project} />
            <DescriptionSection project={project} />
            <ButtonSection project={project} />
          </div>
        </div>
      </div>

      {/* Footer'ı her zaman ekranın altına sabitlemek */}
      <Footer />
    </div>
  );
};

export default ProjectDetail;
