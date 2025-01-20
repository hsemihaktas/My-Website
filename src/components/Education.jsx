import React from "react";

export const Education = ({ darkMode }) => {
  return (
    <>
      <div className="py-3">
        <div className="text-5xl py-2">Education</div>
        <div
          className={`text-2xl flex ${
            darkMode ? "text-[#8EAED9]" : "text-[#6F4F34]"
          }`}
        >
          <span className="flex-grow">İstanbul Medeniyet University</span>
          <span className="ml-auto">3.21/4</span>
        </div>
        <div className="text-lg">
          I studied computer engineering at this university, with a primary
          focus on project management and software development, particularly
          within the field of front-end development. With a strong skillset
          encompassing ReactJS, NodeJS, Tailwind CSS, HTML, CSS, and JavaScript,
          I am highly experienced in this area. During my time at university, I
          have actively contributed to the front-end development of both a
          property website and an AI Django website.
        </div>
      </div>
      <div className="border-t w-full border-gray-300 my-line"></div>
    </>
  );
};

export default Education;
