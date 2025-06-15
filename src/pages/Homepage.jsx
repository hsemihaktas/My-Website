import { Helmet } from "react-helmet";
import { useLanguage } from "../context/LanguageContext";
import WelcomePage from "../components/WelcomePage.jsx";
import About from "../components/About.jsx";
import Education from "../components/Education.jsx";
import Project from "../components/Project.jsx";
import Footer from "../components/Footer.jsx";
import ToggleButton from "../components/ToggleButton.jsx";

function App() {
  const { language } = useLanguage();

  // Meta içerikleri dillere göre tanımlanıyor
  const meta = {
    EN: {
      title: "Hasan Semih Aktaş | Full-Stack Developer Portfolio",
      description:
        "Welcome to the personal portfolio of Hasan Semih Aktaş. Explore projects, experience, and educational background in web development and software engineering.",
    },
    TR: {
      title: "Hasan Semih Aktaş | Full-Stack Geliştirici Portföyü",
      description:
        "Hasan Semih Aktaş'ın kişisel portföyüne hoş geldiniz. Web geliştirme ve yazılım mühendisliği alanındaki projelerini, deneyimlerini ve eğitim geçmişini keşfedin.",
    },
  };
  return (
    <>
      <Helmet>
        {/* Sayfa başlığı ve açıklamalar */}
        <title>{meta[language].title}</title>
        <meta property="og:title" content={meta[language].title} />
        <meta name="description" content={meta[language].description} />
        <meta property="og:description" content={meta[language].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hsemihaktas.vercel.app/" />
      </Helmet>
      <div className="absolute top-4 right-4 z-10">
        <ToggleButton />
      </div>
      <div className="relative lg:flex h-auto dark:bg-[#1F2937] dark:text-white bg-[#FEF3E2] text-black">
        <div className="w-full lg:w-1/2 px-4 h-full flex items-center pt-24 lg:pt-0 lg:fixed">
          <WelcomePage />
        </div>
        <div className="flex flex-wrap h-full w-full lg:w-1/2 px-4 lg:p-20 lg:ml-auto font-medium">
          <About />
          <Education />
          <Project />
        </div>
        <div className="absolute w-full bottom-0 left-0 font-medium">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
