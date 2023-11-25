import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white py-4">
      <div className="container mx-auto">
        <div className="text-center">
          &copy; {new Date().getFullYear()} My Personal Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
