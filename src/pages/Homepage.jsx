import React from 'react';
import WelcomePage from "../components/WelcomePage.jsx";
import About from '../components/About.jsx';
import Education from '../components/Education.jsx';
import Project from '../components/Project.jsx';
import Footer from '../components/Footer.jsx'
function App() {
  return (
    <>
      <div className="relative lg:flex h-auto bg-[#FEF3E2] text-[#000000]">
        <div className="w-full lg:w-1/2 p-4 h-full flex items-center lg:fixed">
          <WelcomePage />
        </div>
        <div className="flex flex-wrap h-full w-full lg:w-1/2 p-4 lg:p-20 lg:ml-auto font-medium">
          <About />
          <Education />
          <Project />
        </div>
        <div className='absolute w-full bottom-0 left-0 font-medium'>
          <Footer />
          </div>
      </div>

    </>
  );
}

export default App;
