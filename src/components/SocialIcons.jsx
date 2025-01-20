import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-regular-svg-icons";

export const SocialIcons = () => {

  return (
    <div className="flex flex-wrap py-5 justify-center lg:justify-start gap-4">
      <a
        href="https://www.linkedin.com/in/hsemihaktas/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#0976b4] bg-[#0976b4] text-white transition-transform duration-500 hover:bg-white hover:text-[#0976b4] hover:animate-rotateAndScale"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
      </a>
      <a
        href="https://github.com/hsemihaktas"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#121212] bg-[#121212] text-white transition-transform duration-500 hover:bg-white hover:text-[#121212] hover:animate-rotateAndScale"
      >
        <FontAwesomeIcon icon={faGithubAlt} className="text-lg" />
      </a>
      <a
        href="mailto:hsemihaktas@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#ee1717] bg-[#ee1717] text-white transition-transform duration-500 hover:bg-white hover:text-[#ee1717] hover:animate-rotateAndScale"
      >
        <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
      </a>
      <button
        href="https://hsemihaktas.vercel.app/HasanSemihAktas_FrontEnd.pdf"
        className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-[#121212] bg-[#121212] text-white transition-transform duration-500 hover:bg-white hover:text-[#121212] hover:animate-rotateAndScale"
      >
        <FontAwesomeIcon icon={faFile} className="text-lg" />
      </button>
    </div>
  );
};

export default SocialIcons;
