import React from "react";

const Footer = ({ darkMode }) => {

  return (
    <footer className={`py-4 ${
      darkMode ? "bg-[#1F2937] text-white" : "bg-[#FEF3E2] text-black"
    }`}>
      <div className="container mx-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} My Personal Website. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
