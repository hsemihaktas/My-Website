import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  // İçerikler
  const content = {
    EN: {
      title: "Who is",
      description: `
        As a Front-End developer specializing in ReactJS and JavaScript, my
        commitment to creating distinctive user experiences and staying
        up-to-date with the latest technology trends distinguishes me. I aim
        not only to write code but also to merge design aesthetics with
        user-friendly interfaces, striving to incorporate imagination and
        accuracy into our projects. This enthusiasm and dedication enable me
        to achieve exceptional outcomes while cooperating within a dynamic
        team.
      `,
    },
    TR: {
      title: " Kimdir",
      description: `
        ReactJS ve JavaScript üzerine uzmanlaşmış bir Front-End geliştirici
        olarak, benzersiz kullanıcı deneyimleri oluşturma konusundaki
        bağlılığım ve en son teknoloji trendlerini takip etmem beni
        farklılaştırıyor. Sadece kod yazmayı değil, aynı zamanda tasarım
        estetiğini kullanıcı dostu arayüzlerle birleştirmeyi hedefliyorum. Bu
        tutkuyla projelerimize hem hayal gücü hem de doğruluk katarak, dinamik
        bir ekip içinde mükemmel sonuçlar elde etmeyi amaçlıyorum.
      `,
    },
  };

  return (
    <>
      <div className="py-3 w-full">
        <div className="text-5xl pb-2 ">
          {language === "EN" && content[language].title}{" "}
          <span className={`${darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"}`}>
            Semih
          </span>
          {language === "TR" && content[language].title}{" "}
          ?
        </div>
        <div className="text-lg">{content[language].description}</div>
      </div>
      <div className="border-t w-full border-gray-300 my-line"></div>
    </>
  );
};

export default About;
