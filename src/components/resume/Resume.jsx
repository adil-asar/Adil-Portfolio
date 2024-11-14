import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div id="home" className="  p-6 bg-white mt-20 font-ubuntu  w-full ">
      <div className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto ">
        <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
          Resume
        </h1>
        <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
          Experience, Skills, Education
        </div>
        <div className="grid  lg:grid-cols-2 grid-cols-1 mt-14   mb-5 lg:gap-7 gap-14  ">
          <Experience />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Resume;
