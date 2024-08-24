import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#D8C4B6] text-white py-4">
      <div className="container mx-auto">
        <div className="text-center text-[#213555]">
          &copy; {new Date().getFullYear()} My Personal Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
