import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export const SocialIcons = () => {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/cv.pdf";
    anchor.download = "HasanSemihAktasCV.pdf";
    anchor.click();
  };
  return (
    <>
      <div className="w-full flex flex-wrap py-5 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/in/hsemihaktas/"
              className="social-margin"
              target="blank"
            >
              <div className="social-icon linkedin">
              <FontAwesomeIcon icon={faLinkedinIn}/>
              </div>
            </a>
            <a
              href="https://github.com/hsemihaktas"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon github">
              <FontAwesomeIcon icon={faGithubAlt}/>
              </div>
            </a>
            <a
              href="mailto:hsemihaktas@gmail.com"
              target="blank"
              className="social-margin"
            >
              <div className="social-icon envelope">
              <FontAwesomeIcon icon={faEnvelope}/>
              </div>
            </a>
            <button target="blank" className="social-margin" onClick={handleDownload}>
              <div className="social-icon file">
                <FontAwesomeIcon icon={faFile}/>
              </div>
            </button>
          </div>
    </>
  );
};

export default SocialIcons;
