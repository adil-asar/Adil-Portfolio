import React from "react";

const About = () => {
  return (
    <div className="w-full py-8  border-t  ">
      <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
        About Me
      </h1>
      <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
        Developer, Thinker, Creative Doer
      </div>
      <div className="flex md:flex-row mt-5 flex-col items-center justify-center gap-5">
        <div className="md:w-2/3 w-full">
          <p className="md:text-base text-sm">
            I am a Full Stack MERN Stack developer, with a strong command of the
            Frontend technology. I continuously work on improving my skillset on
            a daily basis. I love working with a Team, and I also enjoy working
            alone.
          </p>
          <p className="md:text-base text-sm mt-3">
            With hands-on experience in both front-end and back-end
            technologies, including ReactJS, NextJs, Nodejs, PHP, SQL, and
            MongoDB. I specialize in providing high-performance, user-friendly,
             and SEO-optimized solutions to a wide range of clients and projects.
          </p>
        
        </div>
        <div className="md:w-1/3 w-full  bg-slate-400"></div>
      </div>
    </div>
  );
};

export default About;
