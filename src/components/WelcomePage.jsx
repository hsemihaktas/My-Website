/* eslint-disable jsx-a11y/alt-text */
import SocialIcons from "./SocialIcons";
import { useLanguage } from "../context/LanguageContext";

export const WelcomePage = () => {
  const { language } = useLanguage();

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-1/3 h-1/3 ">
          <img
            src={`/images/profilePicture.jpg`}
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          ></img>
        </div>
        <div className="p-6 text-center lg:text-left">
          <div className="text-5xl font-bold">
           <h1>{language === "TR" ? "Benim adım Semih" : "My name is Semih"}</h1>
          </div>
          <div>
            <h2 className="text-2xl font-medium mt-2">
              {language === "TR" ? "Ben " : "I'm "}
              <span
                className="dark:text-[#8EAED9] text-[#6F4F34]"
              >
                {language === "TR" ? "Ön Yüz Geliştiricisiyim" : "Front-end Developer"}
              </span>
            </h2>
          </div>

          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
