import React from "react";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

const Resume = () => {
  return (
    <div id="resume" className="  px-6 pt-32 bg-white   font-ubuntu  w-full ">
      <div className="xl:max-w-[1250px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[700px] mx-auto ">
        <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
          Resume
        </h1>
        <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
          Experience, Skills, Education
        </div>
        <div className="flex flex-col gap-10 mt-10 ">
          <Experience />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default Resume;
