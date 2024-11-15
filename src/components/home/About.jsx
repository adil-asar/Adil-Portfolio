import React from "react";

const About = () => {
 


  return (
    <div className="w-full py-6   ">
      <h1 className="text-4xl font-semibold md:text-left text-center text-[#eb3b5a]">
        About Me
      </h1>
      <div className="px-2 py-0.5 text-white text-sm w-fit bg-[#eb3b5a] md:mx-0 mx-auto ">
        Developer, Thinker, Creative Doer
      </div>
      <div className="flex md:flex-row mt-10 flex-col items-center justify-center md:gap-10 gap-5">
        <div className="lg:w-[75%] md:w-[70%] w-full">
          <p className="md:text-base text-sm text-gray-500">
            I am a  Mern Stack developer, with a strong command of the
            Frontend technology. I continuously work on  my skillset on
            a daily basis. I love working with a Team, and I also enjoy working
            alone. I deliver efficient, user-focused solutions tailored to project needs.
          </p>
          <p className="md:text-base text-sm mt-3 text-gray-500">
            With hands-on experience in both front-end and back-end
            technologies, including ReactJS, NextJs, Nodejs, PHP, SQL, and
            MongoDB. I specialize in providing high-performance, user-friendly,
             and SEO-optimized solutions to a wide range of clients and projects.
             In all aspects of my work, I'm dedicated to advancing my professional development
             and encouraging teamwork.
          </p>
        
        </div>
        <div className="lg:w-[25%]  md:w-[30%] w-full flex flex-col md:items-start justify-center   ">

        <a href="mailto:madildev9gmail.com" className="flex  items-center mb-5  py-2 px-3   w-fit bg-[#ecf0f1] rounded-full">
          <div className="text-white bg-[#eb3b5a] text-xs tracking-wide py-[3px] px-2 rounded-full">Email</div>
          <span className="text-[#343a40] text-xs tracking-wide  px-2"> madildev9gmail.com</span>
          </a>
          <div className="flex items-center  py-2 px-3  mb-5 w-fit bg-[#ecf0f1] rounded-full">
          <div className="text-white bg-[#eb3b5a] text-xs tracking-wide py-[3px] px-2 rounded-full">Phone</div>
          <span className="text-[#343a40] text-xs tracking-wide  px-2"> +92 301 813 9325</span>
          </div>
          <div className="flex items-center  py-2 px-3   w-fit bg-[#ecf0f1] rounded-full">
          <div className="text-white bg-[#eb3b5a] text-xs tracking-wide py-[3px] px-2 rounded-full">Skype</div>
          <span className="text-[#343a40] text-xs tracking-wide  px-2"> ~Muh_Adil</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
