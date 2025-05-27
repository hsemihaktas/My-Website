import { useLanguage } from "../context/LanguageContext";

export const Education = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      title: "Education",
      university: "Istanbul Medeniyet University",
      description: `
        I studied computer engineering at Istanbul Medeniyet University, with a primary
        focus on project management and software development, particularly
        within the field of front-end development. With a strong skillset
        encompassing ReactJS, NodeJS, Tailwind CSS, HTML, CSS, and JavaScript,
        I am highly experienced in this area. During my time at university, I
        have actively contributed to the front-end development of both a
        property website and an AI Django website.
      `,
    },
    TR: {
      title: "Eğitim",
      university: "İstanbul Medeniyet Üniversitesi",
      description: `
        İstanbul Medeniyet Üniversitesinde bilgisayar mühendisliği okudum ve proje yönetimi ile
        yazılım geliştirmeye odaklandım, özellikle ön yüz geliştirme alanında.
        ReactJS, NodeJS, Tailwind CSS, HTML, CSS ve JavaScript gibi güçlü bir
        beceri setine sahibim ve bu alanda oldukça deneyimliyim. Üniversite
        yıllarımda, hem bir emlak sitesi hem de bir AI Django sitesi için
        ön yüz geliştirme çalışmalarına aktif olarak katkıda bulundum.
      `,
    },
  };

  return (
    <>
      <div className="py-3">
        <div className="text-5xl py-2">{content[language].title}</div>
        <div className="text-2xl flex dark:text-[#8EAED9]text-[#6F4F34]">
          <span className="flex-grow">{content[language].university}</span>
          <span className="ml-auto">3.21/4</span>
        </div>
        <div className="text-lg">{content[language].description}</div>
      </div>
      <div className="border-t w-full border-gray-300 my-line"></div>
    </>
  );
};

export default Education;
